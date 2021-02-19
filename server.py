from flask import Flask,request
import requests

app = Flask(__name__)

@app.route('/getWorstParkingLots')
def getWorstParkingLots():
    location = request.args.get('location')
    url = f"https://api.yelp.com/v3/businesses/search?term=parking&location={location}&categories=parking&sort_by=rating"
    payload={}
    headers = {
    'Authorization': 'Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx'
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    totalResults = int(response.json()["total"])
    topX = 10
    offset = totalResults - topX
    url += f"&offset={offset}"
    response = requests.request("GET", url, headers=headers, data=payload)
    return response.json()

app.run(debug = True)