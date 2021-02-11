import { environment } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
//const mapboxgl = require('mapbox-gl');
import { Map } from "mapbox-gl/dist/mapbox-gl"
import * as mapboxgl from "mapbox-gl/dist/mapbox-gl"


@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {

    map = mapboxgl.Map;
    style = 'mapbox://styles/mapbox/dark-v10';
    lat = 32.77;
    lng = -96.80;


    ngOnInit() {
        //mapboxgl.accessToken = environment.mapbox.accessToken;
        mapboxgl.accessToken = 'pk.eyJ1Ijoidm1hZGF0aGlsIiwiYSI6ImNra2FiNmw1aDAxNmIzMG5ha3NhZnE3N2YifQ.bWx-K-QAZYuJwWVjji6JmA'



        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 9,
            center: [this.lng, this.lat]
        });

        this.map.on('load', this.onLoad.bind(this));

    }

    onLoad() {

        
        this.map.addImage
        this.map.addSource('customMarker', {
            type: 'geojson',
            data: 'https://raw.githubusercontent.com/vmmadathil/tx-vaccine-finder/master/data/processed_data/data_02-10-21_processed.json'
        });

        console.log('map loaded')

        this.map.addLayer({
            id: 'customMarketid',
            source: 'customMarker',
            type: 'symbol',
            layout: {
                 'text-field': '{NAME}',
                 'text-size': 9,
                 'text-transform': 'uppercase',
                'icon-image': 'circle',
                'text-offset': [0, 1.5]
            },
             paint: {
                'text-color': '#fff'
            }
        });


        // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
    }

}
