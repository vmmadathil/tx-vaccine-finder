import requests
import json
from datetime import date

today = date.today()
d = today.strftime("%m-%d-%y")

URL = "https://services5.arcgis.com/Rvw11bGpzJNE7apK/arcgis/rest/services/VaccinesPublic_gdb/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&maxRecordCountFactor=4&outSR=102100&resultOffset=0&resultRecordCount=8000&cacheHint=true&quantizationParameters=%7B%22mode%22%3A%22view%22%2C%22originPosition%22%3A%22upperLeft%22%2C%22tolerance%22%3A1.0583354500042335%2C%22extent%22%3A%7B%22xmin%22%3A-11864749.745014807%2C%22ymin%22%3A2986125.9341450464%2C%22xmax%22%3A-10435895.933896504%2C%22ymax%22%3A4355735.017881977%2C%22spatialReference%22%3A%7B%22wkid%22%3A102100%2C%22latestWkid%22%3A3857%7D%7D%7D"

r = requests.get(url = URL)

data = r.json()

filename = 'data' + d + '.json'

with open(filename, 'w') as f:
    json.dump(data, f)