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

        // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());

        this.map.on('click', this.onClick.bind(this));

        //this.map.on('load', this.onLoad.bind(this));

    }

    onClick(e) {

        console.log('clicked')

        var features = this.map.queryRenderedFeatures(e.point, {
            layers: ['avaliable', 'none']
        });

        if (!features.length) {
            return;
        }

        var feature = features[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(feature.geometry.coordinates)
            .setHTML('<p> <font size="2.5">' + feature.properties.NAME + '</font></p><p><strong>Address: </strong>' + feature.properties.ADDRESS + ' ' +feature.properties.CITY + ', TX ' +  feature.properties.ZIP +  '</p>' + '<p><strong>Vaccines Avaliable: </strong>' + feature.properties.VACCINES_AVAILABLE + '<p><strong>Phone: </strong>' + feature.properties.PublicPhone + '<p><strong>Last Updated: </strong>' + feature.properties.LAST_UPDATE_TIME_VAC + feature.properties.LAST_UPDATE_VAC)
            .addTo(this.map);

    }

}
