import tabulator
import json
import re
from pathlib import Path

fp = re.compile('\w+', re.UNICODE)

def fingerprint(x):
    return ''.join(fp.findall(x.upper()))

if __name__ == '__main__':
    # How to get places.csv from a nominatim server?
    # # kubectl exec -it nominatim-5d6889fd59-lxps7 -- su nominatim -c "psql -c \"\\copy (select hstore_to_json(name) from place where type in ('village', 'town', 'city', 'locality')) to stdout with csv\"" > places.csv
    # How to get official list of towns?
    # # https://data.gov.il/dataset/citiesandsettelments
    langs = {}
    s = tabulator.Stream('tools/yeshuvim.csv', headers=1)
    s.open()
    for item in s.iter(keyed=True):
        langs.setdefault('he', []).append(item['שם_ישוב'].strip().replace('(', 'XXX').replace(')', '(').replace('XXX', ')').replace('  ', ' '))
        langs.setdefault('en', []).append(item['שם_ישוב_לועזי'].strip().title().replace('  ', ' '))

    s = tabulator.Stream('tools/places.csv')
    s.open()
    for item in s.iter():
        if len(item) == 0: continue
        item = json.loads(item[0])
        for k, v in item.items():
            if k.startswith('name'):
                langs.setdefault(k[5:], []).append(v.strip(', '))


    combinations = {
        'he': ('he', ''),
        'ar': ('ar', 'he', ''),
        'en': ('en', 'he', ''),
        'es': ('es', 'en', ''),
        'fr': ('fr', 'en', ''),
        'ru': ('ru', 'en', ''),
    }
    suggestions = {}
    for k, v in combinations.items():
        print('COMBINATION', k)
        s = []
        for lang in v:
            for w in langs[lang]:
                if w:
                    fw = fingerprint(w)
                    found = False
                    for ww in s:
                        if ww == w:
                            found = True
                            break
                        if fingerprint(ww) == fw:
                            found = True
                            print('Matched %s based on fingerprint (kept %s)' % (w, ww))
                            break
                    if not found:
                        s.append(w)
        suggestions[k] = s
    
    for k, v in suggestions.items():
        print(k, len(v), v[:10])

    f_out = Path('src/app/city-suggestions.ts')
    f_out.open('w').write('''
/* tslint:disable */
export const citySuggestions = {};
'''.format(json.dumps(
        suggestions, ensure_ascii=False, sort_keys=True, indent=2)
        )
    )

