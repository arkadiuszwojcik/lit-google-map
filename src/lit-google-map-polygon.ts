import {LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js'
import {Shape} from './shape';

@customElement('lit-google-map-polygon')
export class LitGoogleMapPolygon extends LitElement implements Shape {
    @property({type : Array})
    paths: object[] = [ ];

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
    polygon : google.maps.Polygon = null;

    attachToMap(map: google.maps.Map): void {
        this.map = map;
        this.mapChanged();
    }

    mapChanged() {
        // Polygon will be rebuilt, so disconnect existing one from old map and listeners.
        if (this.polygon) {
            this.polygon.setMap(null);
            google.maps.event.clearInstanceListeners(this.polygon);
        }

        if (this.map && this.map instanceof google.maps.Map) {
            this.mapReady();
        }
    }

    mapReady() {
        this.polygon = new google.maps.Polygon({
            map: this.map,
            strokeColor: this.strokeColor,
            strokeOpacity: this.strokeOpacity,
            strokeWeight: this.strokeWeight,
            fillColor: this.fillColor,
            fillOpacity: this.fillOpacity,
            paths: this.paths
          });
    }
}