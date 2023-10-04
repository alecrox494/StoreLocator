import { AppMapOptions } from './../interfaces/map.interface';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../app.config';
import { MapCoords } from '../interfaces/map.interface';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {

  constructor() { }

  //https://stackoverflow.com/questions/10268033/google-maps-api-v3-method-fitbounds

  async initMap( coords: MapCoords[], mapElement:HTMLElement, opts?: AppMapOptions | undefined ): Promise<void> {
    // @ts-ignore
    const { Map} = await google.maps.importLibrary("maps") as google.maps.MapsLibrary,
    // @ts-ignore
    const { Marker } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    // @ts-ignore
    let position: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined;

    const isMultiCoords: boolean = coords.length > 1;

    // Prepare coordinates
    if (isMultiCoords) {
      //multicoords
    } else {
      // single coords
      position = coords[0];
    }

    // The map options
    const mapOptions = this.manageMapOptions(opts, position);

    // The map
    const map = new Map(mapElement,  mapOptions);

    // The marker
    const marker = new Marker({
      map: map,
      position: position,
      title: 'Place Name'
    });
  }

  // @ts-ignore
  manageMapOptions(opts: AppMapOptions | undefined, position: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined): google.maps.MapOptions {
    // @ts-ignore
    let mapOptions: google.maps.MapOptions,
    zoom = 10,
    mapId = Math.random().toString(6);

    if (opts) {
      zoom = opts.zoom ? opts.zoom : 10;
      mapId = opts.mapID ? opts.mapID : Math.random().toString(6);
    }

    return mapOptions = {
      zoom: zoom,
      center: position,
      disableDefaultUI: true,
      styles: AppConfig.getGMapStyle(),
    }
  }
}
