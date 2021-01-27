import json

#path to json file
path = 'data_01-27-21' 

featureCollection = {"type" : "Feature Collection", 
                     "features" : []} 


with open(path + '.json') as json_file: 
    data = json.load(json_file) 

#looping through each feature in the raw data
for i in data['features']:

    #empty dictionary in GeoJSON Format
    feature = {"type" : "Feature",
               "geometry" : {
                   "type" : "Point",
                    "coordinates" : []},
                "properties" : ''}

    feature['geometry']['coordinates'].append(i['attributes']['LONGITUDE'])
    feature['geometry']['coordinates'].append(i['attributes']['LATITUDE'])
    feature['properties'] = i['attributes']

    #appending to feature collection dictionary
    featureCollection['features'].append(feature)

filename = path + '_processed.json'

#writing file
with open(filename, 'w') as f:
    json.dump(featureCollection, f)


    