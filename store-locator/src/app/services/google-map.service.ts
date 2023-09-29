import { AppMapOptions } from './../interfaces/map.interface';
import { Injectable } from '@angular/core';
import { MapCoords } from '../interfaces/map.interface';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {

  constructor() { }

  // trasformarlo in un servizio al quale passi i parametri e le impostazioni grafiche
  async initMap( coords: MapCoords[], mapElement:HTMLElement, opts?: AppMapOptions | undefined ): Promise<void> {
    // @ts-ignore
    const { Map} = await google.maps.importLibrary("maps") as google.maps.MapsLibrary,
    // @ts-ignore
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    // @ts-ignore
    let position: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined;

    // Prepare coordinates
    if (coords.length > 1) {
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
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: 'Uluru'
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

    const mapStyle = [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ];

    return mapOptions = {
      zoom: zoom,
      center: position,
      mapId: mapId,
      disableDefaultUI: true,
      styles: mapStyle,
    }
  }
}
