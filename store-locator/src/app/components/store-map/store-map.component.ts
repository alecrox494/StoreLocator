import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { MapCoords } from 'src/app/interfaces/map.interface';

@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.component.html',
  styleUrls: ['./store-map.component.scss']
})
export class StoreMapComponent implements AfterViewInit {
  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() coordsList!: MapCoords[];

  constructor(private elementRef: ElementRef) { }


  ngAfterViewInit(): void {
    this.initMap();
  }

  // trasformarlo in un servizio al quale passi i parametri e le impostazioni grafiche
  async initMap(): Promise<void> {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };

    // Request needed libraries.

    // @ts-ignore
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary,
    // @ts-ignore
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    // The map, centered at Uluru
    const map = new Map(
      this.elementRef.nativeElement.querySelector('#map') as HTMLElement,
      {
        zoom: 4,
        center: position,
        mapId: 'DEMO_MAP_ID',
      }
    );

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: 'Uluru'
    });
  }
}
