import json
from geopy.geocoders import MapBox

geolocator = MapBox(api_key="pk.eyJ1Ijoidm1hZGF0aGlsIiwiYSI6ImNra2FiNmw1aDAxNmIzMG5ha3NhZnE3N2YifQ.bWx-K-QAZYuJwWVjji6JmA")

#path to json file
rawfile = 'data_02-17-21' 
path = 'raw_data/' + rawfile

featureCollectionAvali = {"type" : "FeatureCollection", 
                     "features" : []} 

featureCollectionExhaust = {"type" : "FeatureCollection", 
                     "features" : []} 

featureCollectionHubs = {"type" : "FeatureCollection", 
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
    feature['properties']['marker-symbol'] = 'circle-15'

    #allocating to the different dictionaries
    if(i['attributes']['TYPE'] == 'Vaccine Hub'):
        featureCollectionHubs['features'].append(feature)
    elif(i['attributes']['VACCINES_AVAILABLE'] == 0):
        feature['properties']['marker-color'] = '#FF0000' 
        featureCollectionExhaust['features'].append(feature)
    else:
        feature['properties']['marker-color'] = '#228B22'
        featureCollectionAvali['features'].append(feature)

    #appending to feature collection dictionary
    

filenameAvali = 'processed_data/' + rawfile + '_avaliable' + '_processed.json'
filenameExhaust = 'processed_data/' + rawfile + '_none' + '_processed.json'
filenameHubs = 'processed_data/' + rawfile + '_hubs' + '_processed.json'

#writing avaliable file
with open(filenameAvali, 'w') as f:
    json.dump(featureCollectionAvali, f)

#writing not avaliable file
with open(filenameExhaust, 'w') as f:
    json.dump(featureCollectionExhaust, f)

#writing avaliable file
with open(filenameHubs, 'w') as f:
    json.dump(featureCollectionHubs, f)