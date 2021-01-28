import json
from geopy.geocoders import MapBox

geolocator = MapBox(api_key="pk.eyJ1Ijoidm1hZGF0aGlsIiwiYSI6ImNra2FiNmw1aDAxNmIzMG5ha3NhZnE3N2YifQ.bWx-K-QAZYuJwWVjji6JmA")

#path to json file
path = 'data_01-27-21' 

featureCollection = {"type" : "FeatureCollection", 
                     "features" : []} 


with open(path + '.json') as json_file: 
    data = json.load(json_file) 

#print(data)

#looping through each feature in the raw data
for i in data['features']:

    #empty dictionary in GeoJSON Format
    feature = {"type" : "Feature",
               "geometry" : {
                   "type" : "Point",
                    "coordinates" : []},
                "properties" : ''}

    if (i['attributes']['LONGITUDE'] is None):
        try:
            address = i['attributes']['ADDRESS'] + i['attributes']['CITY'] + ', TX'
            #convert address to long and lat 
            location = geolocator.geocode(address)
            
            # adding to dictionary
            feature['geometry']['coordinates'].append(location.longitude)
            feature['geometry']['coordinates'].append(location.latitude)
        except:
            print(i['attributes'])
        
    else:
        feature['geometry']['coordinates'].append(i['attributes']['LONGITUDE'])
        feature['geometry']['coordinates'].append(i['attributes']['LATITUDE'])
    feature['properties'] = i['attributes']

    #appending to feature collection dictionary
    featureCollection['features'].append(feature)

filename = path + '_processed.json'

#writing file
with open(filename, 'w') as f:
    json.dump(featureCollection, f)


    