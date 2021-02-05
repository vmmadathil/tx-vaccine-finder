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

        this.map.loadImage('circle-15.png');

        this.map.addImage('circle-15');

        this.map.addSource('customMarker', {
            type: 'geojson',
            data: 'https://raw.githubusercontent.com/vmmadathil/vmmadathil.github.io/master/data_02-04-21_processed.json'
        });

        console.log('map loaded')

        this.map.addLayer({
            id: 'customMarketid',
            source: 'customMarker',
            type: 'symbol',
            layout: {
            //     'text-field': '{NAME}',
            //     'text-size': 9,
            //     'text-transform': 'uppercase',
                'icon-image': 'circle'
            //    'text-offset': [0, 1.5]
            }
            // paint: {
          //      'text-color': '#fff'
         //   }
        });

        // this.map.on('click', 'customMarketid', function (e) {
        //     var name = e.features[0].properties.NAME;
        //     var vacAvali = e.features[0].properties.VACCINES_AVAILABLE;
        //     var coordinates = e.features[0].geometry.coordinates.slice();

        //     new mapboxgl.Popup()
        //         .setLngLat(coordinates)
        //         .setHTML(name)
        //         .addTo(this.map);


        // });

        // // Change the cursor to a pointer when the mouse is over the places layer.
        // this.map.on('mouseenter', 'customMarketid', function () {
        //     this.map.getCanvas().style.cursor = 'pointer';
        // });

        // // Change it back to a pointer when it leaves.
        // this.map.on('mouseleave', 'customMarketid', function () {
        //     this.map.getCanvas().style.cursor = '';
        // });


        // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
    }

}
