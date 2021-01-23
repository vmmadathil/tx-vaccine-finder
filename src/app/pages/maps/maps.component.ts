import { environment } from '../../../environments/environment';
import { Component,OnInit } from '@angular/core';
const mapboxgl = require('mapbox-gl');

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {

    map = mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
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

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
        
}
