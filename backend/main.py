import os
import json
import glob
import requests
from sqlalchemy import create_engine
from sqlalchemy.sql import text

engine = create_engine(os.environ['DATABASE_URL'])
secret = os.environ['RECAPTCHA_SECRET']
connection = engine.connect()
insert = text('insert into reports (data) values(:v)')
session = requests.Session()

def push_to_db(request):
    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)


    if request.method == 'POST':
        payload = request.get_json()
        recaptcha = payload.pop('recaptcha', None)
        if recaptcha is not None:
            data = dict(response=recaptcha, secret=secret)
            try:
                payload['recaptcha'] = session.post('https://www.google.com/recaptcha/api/siteverify', data=data).json()
            except:
                payload['recaptcha'] = dict(success=False)
        connection.execute(insert, v=json.dumps(payload))
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
        return ('{"success": true}', 200, headers)
