import {LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js'
import {Shape} from './shape';

@customElement('lit-google-map-circle')
export class LitGoogleMapCircle extends LitElement implements Shape {
    @property({type : Number, attribute: 'center-latitude'})
    centerLatitude: number = -34.397;

    @property({type : Number, attribute: 'center-longitude'})
    centerLongitude: number = 150.644;

    @property({type : Number})
    radius: number = 100000;

    @property({type : String, attribute: 'fill-color'})
    fillColor: string = '#FF0000';

    @property({type : Number, attribute: 'fill-opacity'})
    fillOpacity: number = 0.35;

    @property({type : String, attribute: 'stroke-color'})
    strokeColor: string = '#FF0000';

    @property({type : Number, attribute: 'stroke-opacity'})
    strokeOpacity: number = 0.8;

    @property({type : Number, attribute: 'stroke-weight'})
    strokeWeight: number = 2;

    map : google.maps.Map = null;
    circle : google.maps.Circle = null;

    attachToMap(map: google.maps.Map): void {
        this.map = map;
        this.mapChanged();
    }

    mapChanged() {
        // Circle will be rebuilt, so disconnect existing one from old map and listeners.
        if (this.circle) {
            this.circle.setMap(null);
            google.maps.event.clearInstanceListeners(this.circle);
        }

        if (this.map && this.map instanceof google.maps.Map) {
            this.mapReady();
        }
    }

    mapReady() {
        this.circle = new google.maps.Circle({
            map: this.map,
            strokeColor: this.strokeColor,
            strokeOpacity: this.strokeOpacity,
            strokeWeight: this.strokeWeight,
            fillColor: this.fillColor,
            fillOpacity: this.fillOpacity,
            center: {
                lat: this.centerLatitude,
                lng: this.centerLongitude
            },
            radius: this.radius
          });
    }
}