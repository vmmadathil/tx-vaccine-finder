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
    popup = new mapboxgl.Popup({ offset: [0, -15] });
    style = 'mapbox://styles/vmadathil/ckl4d7zz62pxt18npug6v54lj';
    lat = 32.77;
    lng = -96.80;


    ngOnInit() {
        //mapboxgl.accessToken = environment.mapbox.accessToken;
        mapboxgl.accessToken = 'pk.eyJ1Ijoidm1hZGF0aGlsIiwiYSI6ImNra2FiNXFpMzAxb2gydm91dDFpNG5vdW0ifQ.0V-MPw9LSZi6nsetykvflg'



        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 9,
            center: [this.lng, this.lat]
        });

        this.map.on('click', this.onClick.bind(this));

        //this.map.on('load', this.onLoad.bind(this));

    }

    onClick(e) {

        console.log('clicked')

        var features = this.map.queryRenderedFeatures(e.point, {
            layers: ['avaliable']
        });

        if (!features.length) {
            return;
        }

        var feature = features[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(feature.geometry.coordinates)
            .setHTML('<h5>' + feature.properties.NAME + '</h5><p>' + feature.properties.ADDRESS + '</p>')
            .addTo(this.map);

    }

    onLoad() {

        //loading image
        this.map.loadImage(
            '../../assets/img/circle-15.png',
            function (error, image) {
                if (error) throw error;
                //adding image
                this.map.addImage('circle', image);
                //adding GeoJSON source
                this.map.addSource('customMarker', {
                    type: 'geojson',
                    data: 'https://raw.githubusercontent.com/vmmadathil/tx-vaccine-finder/master/data/processed_data/data_02-13-21_processed.json'
                });

                //adding map layer
                this.map.addLayer({
                    id: 'customMarketid',
                    source: 'customMarker',
                    type: 'symbol',
                    layout: {
                        'text-field': '{NAME}',
                        'text-size': 9,
                        'text-transform': 'uppercase',
                        //'icon-image': 'circle',
                        'text-offset': [0, 1.5]
                    },
                    paint: {
                        'text-color': '#fff'
                    }
                });
            }
        )


        console.log('map loaded')




        // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
    }

}
