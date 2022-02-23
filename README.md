# lit-google-map

This project is port of [google-map](https://www.webcomponents.org/element/GoogleWebComponents/google-map) webcomponent based on [Lit v2](https://lit.dev/) library.

UPDATE v1.0.0 (23/02/2022) 
-  Project ported to [Lit v2](https://lit.dev/)
-  Added shapes: Circle and Polygon
-  Bug fixes

## Table of contents

[How to use](#How-to-use)

[Map element attributes](#Map-element-attributes)

[Marker element attributes](#Marker-element-attributes)

[Circle shape element attributes](#Circle-shape-element-attributes)

[Polygon shape element attributes](#Polygon-shape-element-attributes)

[How to build](#How-to-build)

[License](#License)

## How to use

Include lit-google-map bundle in HTML file:

```html
<script src="lit-google-map.bundle.js"></script>
```

or its minified version:

```html
<script src="lit-google-map.bundle.min.js"></script>
```

Use component in any place you want (remember to fill in Google Maps API key):

```html
<lit-google-map api-key="YOUR_GOOGLE_MAPS_API_KEY">    
</lit-google-map>
```

You can also include any number of map markers:

```html
<lit-google-map api-key="YOUR_GOOGLE_MAPS_API_KEY">
    <lit-google-map-marker slot="markers" latitude="49.4404582" longitude="20.2700361">
    </lit-google-map-marker>  
    <lit-google-map-marker slot="markers" latitude="50.797444" longitude="20.4600623">
    </lit-google-map-marker>
</lit-google-map>
```

or/and shapes:

```html
<lit-google-map api-key="YOUR_GOOGLE_MAPS_API_KEY">  
    <lit-google-map-circle slot="shapes" center-latitude="49.4404582" center-longitude="20.2700361">
    </lit-google-map-circle>
</lit-google-map>
```

## Map element attributes

* '*api-key*' - Google map API key
* '*language*' - Google map language (optional)
* '*map-id*' - Google map mapId (optional)
* '*version*' - Google map js script version to load (default: '3.48')
* '*styles*' - Map styles in json format (optional)
* '*zoom*' - Zoom level (default: '8')
* '*fit-to-markers*' - Fit map area to display all markers
* '*map-type*' - Map type to display: 'roadmap', 'satellite', 'hybrid', 'terrain'
* '*center-latitude*'- Latitude of map initial center point
* '*center-longitude*' - Longitude of map initial center point

Example:

```html
<lit-google-map api-key="SOME_API_KEY" zoom="6" map-type="satellite" center-latitude="51.8436554" center-longitude="19.5070867">    
</lit-google-map>
```

## Marker element attributes

* '*latitude*' - Marker latitude position
* '*longitude*' - Marker longitude position
* '*label*' - Marker label
* '*z-index*' - Marker z index
* '*icon*' - Marker icon image url

Example:

```html
<lit-google-map-marker slot="markers" latitude="49.4404582" longitude="20.2700361">
</lit-google-map-marker>
```

Markers can also have associated InfoWindow with html content:

```html
<lit-google-map-marker slot="markers" latitude="50.797444" longitude="20.4600623">
    <p>Some description</p>
    <img src="some_image.jpg" alt="some image">
</lit-google-map-marker>
```

## Circle shape element attributes

* '*center-latitude*' - Circle center latitude position
* '*center-longitude*' - Circle center longitude position
* '*radius*' - Circle radius (default: 100000)
* '*fill-color*' - Circle fill color
* '*fill-opacity*' - Circle fill opacity
* '*stroke-color*' - Circle stroke color
* '*stroke-opacity*' - Circle stroke opacity
* '*stroke-weight*' - Circle stroke weight

Example:

```html
<lit-google-map-circle slot="shapes" center-latitude="53.176389" center-longitude="22.073056" radius="50000"  fill-color="#7FB3D5" fill-opacity="0.35" stroke-color="#2874A6" stroke-opacity="0.8" stroke-weight="5">
</lit-google-map-circle>
```

## Polygon shape element attributes

* '*paths*' - Polygon paths points in form of json array
* '*fill-color*' - Polygon fill color
* '*fill-opacity*' - Polygon fill opacity
* '*stroke-color*' - Polygon stroke color
* '*stroke-opacity*' - Polygon stroke opacity
* '*stroke-weight*' - Polygon stroke weight

Example:

```html
<lit-google-map-polygon slot="shapes" paths='[{"lat": 53.7332, "lng": 15.5180}, {"lat": 54.0444, "lng": 18.1379}, {"lat": 53.2028, "lng": 16.9292}, {"lat": 53.7332, "lng": 15.5180}]' fill-color="#7FB3D5" fill-opacity="0.35" stroke-color="#2874A6" stroke-opacity="0.8" stroke-weight="5">
</lit-google-map-polygon>   
```

## How to build

Before build install all required packages:

```
npm install
```

Bare build:

```
npm run build
```

Build with bundle step:

```
npm run bundle
```

## License

MIT