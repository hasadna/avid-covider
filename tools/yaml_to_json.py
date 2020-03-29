import os
import re
from pathlib import Path
from hashlib import md5
from slugify import slugify
import glob
import yaml
import json
import requests

def calc_hash(s):
    ret = md5(s.encode('utf8')).hexdigest()[:10]
    return ret

HEB = re.compile('[א-ת]')
def has_hebrew(s):
    return len(HEB.findall(s)) > 0

def get_field(x, f):
    parts = f.split('.')
    while len(parts) > 0:
        p = parts.pop(0)
        x = x.get(p, {})
    return x


def get_uid(x, stack, index=None):
    try:
        FIELDS = ['name', 'wait.variable', 'say', 'switch.arg', 'do.cmd', 'do.variable', 'match', 'pattern', 'default', 'show']
        values = [get_field(x, f) for f in FIELDS]
        values = ','.join([str(v) for v in values if v is not None])
        assert len(values) > 0
        current_hash = ''.join(stack)
        key = '{}|{}|{}'.format(current_hash, values, index)
        ret = calc_hash(key)
        return ret
    except:
        print(x, stack)
        raise


def assign_ids(x, stack=[]):
    if isinstance(x, dict):
        uid = None
        for k, v in x.items():
            if k == 'steps':
                uid = get_uid(x, stack)
                for i, s in enumerate(v):
                    new_stack = stack + [uid, str(i)]
                    s['uid'] = get_uid(s, new_stack, i)
                    assign_ids(s, new_stack)    
            else:
                assign_ids(v, stack)
        if uid is not None:
            x['uid'] = uid
    elif isinstance(x, list):
        for xx in x:
            assign_ids(xx, stack)
    else:
        return

TRANSIFEX_TOKEN = os.environ.get('TRANSIFEX_TOKEN') or  os.environ.get('TX_TOKEN')
LANGUAGES = ('ar', 'am', 'en', 'ru', 'es')

def assign_translations(x, stack, parent=None, parentkey=None, translations=None, fields=(), field_in_key=False):
    if isinstance(x, dict):
        key = None
        if x.get('slug'):
            stack.append(x['slug'])
        elif x.get('name'):
            stack.append(slugify(x['name']))
        if 'uid' in x:
            stack.append(x['uid'][:2])
        for k, v in x.items():
            if k == 'steps':
                for s in v:
                    new_stack = stack + []
                    yield from assign_translations(s, new_stack, 
                        parent=None, parentkey=None,
                        translations=translations, fields=fields, field_in_key=field_in_key)
            else:
                yield from assign_translations(v, stack[:],
                    parent=x, parentkey=k,
                    translations=translations, fields=fields, field_in_key=field_in_key
                )
    elif isinstance(x, list):
        for index, xx in enumerate(x):
            new_stack = stack + [index]
            yield from assign_translations(xx, new_stack, 
                parent=x, parentkey=index,
                translations=translations, fields=fields, field_in_key=field_in_key
            )
    elif isinstance(x, str):
        if parent and parentkey is not None and has_hebrew(x):
            if isinstance(parentkey, str) and parentkey not in fields:
                return
            if field_in_key:
                key = '/'.join(str(s) for s in stack + [parentkey])
            else:
                key = '/'.join(str(s) for s in stack)
            yield key, x
            if key in translations:
                parent[parentkey]={'.tx': dict(translations[key], _=x)}
            # else:
            #     print('KEY NOT IN TX %s'% key)



def transifex_session():
    s = requests.Session()
    s.auth = ('api', TRANSIFEX_TOKEN)
    return s


def transifex_slug(filename):
    return '_'.join(filename.parts).replace('.', '_')


def push_translations(filename: Path, translations):
    translations = dict(he=translations)
    content = yaml.dump(translations, allow_unicode=True, indent=2, width=1000000)

    slug = transifex_slug(filename)
    s = transifex_session()
    resp = s.get(f'https://www.transifex.com/api/2/project/avid-covider/resource/{slug}/')

    if resp.status_code == requests.codes.ok:
        print('Update file:')
        data = dict(
            content=content,
        )

        resp = s.put(
            f'https://www.transifex.com/api/2/project/avid-covider/resource/{slug}/content/',
            json=data
        )
        print(resp.status_code, resp.content[:50])
        
    else:
        print('New file:', slug)
        data = dict(
            slug=slug,
            name=str(filename),
            accept_translations=True,
            i18n_type='YAML_GENERIC',
            content=content,
        )

        resp = s.post(
            'https://www.transifex.com/api/2/project/avid-covider/resources/',
            json=data
        ) 
        print(resp.status_code, resp.content[:100])


def pull_translations(lang, filename):
    s = transifex_session()
    slug = transifex_slug(filename)
    url = f'https://www.transifex.com/api/2/project/avid-covider/resource/{slug}/translation/{lang}/'
    try:
        translations = s.get(url).json()
    except json.decoder.JSONDecodeError:
        print('No data from %s' % url)
        return {}
    translations = yaml.load(translations['content'], Loader=yaml.BaseLoader)['he']
    translations = dict((k, v) for k, v in translations.items() if v)
    return translations

def write_ical(title, body, path):
    path = 'dist/avid-covider/{}assets/corona_reminder.ics'.format(path)
    with open(path, 'w', encoding='utf8') as ics:
        ics.write('''BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//coronaisrael.org//
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:Asia/Jerusalem
TZURL:http://tzurl.org/zoneinfo-outlook/Asia/Jerusalem
X-LIC-LOCATION:Asia/Jerusalem
BEGIN:DAYLIGHT
TZOFFSETFROM:+0200
TZOFFSETTO:+0300
TZNAME:EEST
DTSTART:19700329T000000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0300
TZOFFSETTO:+0200
TZNAME:EET
DTSTART:19701025T000000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTAMP:20200328T131636Z
UID:corona-israel-0001
DTSTART;TZID=Asia/Jerusalem:20200328T080000
RRULE:FREQ=DAILY
DTEND;TZID=Asia/Jerusalem:20200328T081500
SUMMARY:{title}
URL:https://coronaisrael.org/?source=calendar
DESCRIPTION:{body}
LOCATION:https://coronaisrael.org/?source=calendar
TRANSP:TRANSPARENT
X-MICROSOFT-CDO-BUSYSTATUS:FREE
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:{title}
TRIGGER:-PT0M
END:VALARM
END:VEVENT
END:VCALENDAR'''.format(title=title, body=body))

def create_assets(script):
    translations = {}
    for x in script['keys']:
        translations[x['name']] = x['show'].get('.tx',{})

    languages = [(x, x+'/') for x in LANGUAGES] + [('_', '')]
    for lang, path in languages:
        calendarTitle = translations['calendarTitle']
        calendarTitle=calendarTitle.get(lang, calendarTitle.get('_'))
        calendarBody = translations['calendarBody']
        calendarBody=calendarBody.get(lang, calendarBody.get('_'))
        try:
            write_ical(calendarTitle, calendarBody, path)
        except Exception as e:
            print('Failed to write ical %s' % e)

if __name__=='__main__':
    f_in = Path('scripts/script.yaml')
    scripts = yaml.load(f_in.open())
    assign_ids(scripts, [str(f_in)])

    if TRANSIFEX_TOKEN:
        rx_translations = {}
        for lang in LANGUAGES: 
            lang_translations = pull_translations(lang, f_in)
            for key, value in lang_translations.items():
                rx_translations.setdefault(key, {})[lang] = value
        tx_translations = {}
        for script in scripts:
            for k, v in assign_translations(script, [], translations=rx_translations, fields=('show', 'say', 'placeholder')):
                assert tx_translations.get(k, v) == v, 'Duplicate key %s (v=%r, tx[k]==%r)' % (k, v, tx_translations[k])
                tx_translations[k] = v
                print(k, v)
        push_translations(f_in, tx_translations)

        create_assets(scripts[-1])

    scripts = dict(s=scripts)
    f_out = Path('src/app/script.ts')
    f_out.open('w').write('''
/* tslint:disable */
export const script = {};
'''.format(json.dumps(
        scripts, ensure_ascii=False, sort_keys=True, indent=2)
        )
    )

