import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/models/Location';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { transform } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})

export class MapViewComponent implements OnInit {

  map: Map;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.initMap();
    this.locationService.getLocatoins().subscribe((locations) => {
      this.setLocations(locations);
    });
  }

  addLocation = (evt: any) => {

    var coordinates = transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');

    const newLocation = {
      clickTime: new Date,
      coordinates: {
        lon: coordinates[0],
        lat: coordinates[1]
      }
    }
    this.locationService.addLocation(newLocation).subscribe();
    const feature = this.createFeature(evt.coordinate);
    const newLayer = this.createLayer([feature]);
    this.map.addLayer(newLayer);
  }

  createLayer = (features: Feature[]) => {
    return new VectorLayer({
      source: new VectorSource({
        features: features
      })
    });
  }

  createFeature = (coordinates: number[]) => {
    const feature = new Feature({
      geometry: new Point(coordinates),
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 23],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: '../../assets/images/marker-icon.svg',
      }),
    });

    feature.setStyle(iconStyle);
    return feature;
  }

  initMap = () => {
    const raster = new TileLayer({
      source: new OSM(),
    });
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [raster]
    });
  }

  setLocations = (locations: Location[]) => {
    let features = [];

    for (let i = 0; i < locations.length; i++) {
      let coordinates = [locations[i].coordinates.lon, locations[i].coordinates.lat];
      coordinates = transform(coordinates, 'EPSG:4326', 'EPSG:3857');
      const feature = this.createFeature(coordinates);
      features.push(feature);
    }

    const layer = this.createLayer(features);

    this.map.addLayer(layer);
    this.map.on('click', (evt) => {
      this.addLocation(evt);
    })
  }
}
