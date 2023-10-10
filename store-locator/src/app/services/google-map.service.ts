import { AppMapOptions } from './../interfaces/map.interface';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../app.config';
import { MapCoords } from '../interfaces/map.interface';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {
  ZOOM: number = 10;

  constructor() { }

  async initMap( coords: MapCoords[], mapElement:HTMLElement, opts?: AppMapOptions | undefined ): Promise<void> {
    // @ts-ignore
    const { Map} = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    // @ts-ignore
    let position: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined,
    // @ts-ignore
    bounds = new google.maps.LatLngBounds();
    // @ts-ignore
    let mapOptions: google.maps.MapOptions;


    const isMultiCoords: boolean = coords.length > 1;

    // Prepare coordinates
    if (isMultiCoords) {
      //multicoords
      for (let i = 0; i < coords.length; i++) {
        // @ts-ignore
        bounds.extend(new google.maps.LatLng(coords[i].lat, coords[i].lng))
      }
      mapOptions = this.manageMultiCoordsMapOptions(opts);
    } else {
      // single coords
      position = coords[0];
      mapOptions = this.manageSingleCoordMapOptions(opts, position);
    }

    // The map
    const map = new Map(mapElement,  mapOptions);

     // The marker
    if (isMultiCoords) {
      map.fitBounds(bounds);
      // @ts-ignore
      map.panToBounds(bounds);
      coords.forEach(coord => {
        this.setMarker(coord, map);
      });
    } else {
      this.setMarker(coords[0], map);
    }

  }

   // @ts-ignore
  setMarker(coords: MapCoords, map: google.maps.Map, placeName:string = 'Place Name'): void {
     // @ts-ignore
    const marker = new google.maps.Marker({
      map: map,
      position: coords,
      title: placeName
    });
  }

  // @ts-ignore
  manageSingleCoordMapOptions(opts: AppMapOptions | undefined, position: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined): google.maps.MapOptions {
    if (opts) {
      this.ZOOM = this.setZoom(opts.zoom);
    }

    return {
      zoom: this.ZOOM,
      center: position,
      disableDefaultUI: true,
      styles: AppConfig.getGMapStyle(),
    }
  }

  // @ts-ignore
  manageMultiCoordsMapOptions(opts: AppMapOptions | undefined): google.maps.MapOptions {
    if (opts) {
      this.ZOOM = this.setZoom(opts.zoom);
    }

    return {
      zoom: this.ZOOM,
      disableDefaultUI: true,
      styles: AppConfig.getGMapStyle(),
    }
  }

  setZoom(zoom: number | undefined): number {
    return zoom ? zoom : 10;
  }
}
