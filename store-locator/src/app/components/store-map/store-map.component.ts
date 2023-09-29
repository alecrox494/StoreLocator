import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { MapCoords } from 'src/app/interfaces/map.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.component.html',
  styleUrls: ['./store-map.component.scss']
})
export class StoreMapComponent implements AfterViewInit {
  @Input() coordsList!: Observable<Array<MapCoords>>;

  constructor(private elementRef: ElementRef) { }


  ngAfterViewInit(): void {
    this.coordsList.subscribe((coords) => {
      const mapID = Math.random().toString(6)
      this.initMap(coords, mapID);
    });
  }

  // trasformarlo in un servizio al quale passi i parametri e le impostazioni grafiche
  async initMap( coords: MapCoords[], mapID: string): Promise<void> {
    // @ts-ignore
    const { Map} = await google.maps.importLibrary("maps") as google.maps.MapsLibrary,
    // @ts-ignore
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    // @ts-ignore
    let position: LatLng | google.maps.LatLngLiteral | null | undefined;

    // Prepare coordinates
    if (coords.length > 1) {
      //multicoords
    } else {
      // single coords
      position = coords[0];
    }

    // The map, centered at Uluru
    const map = new Map(
      this.elementRef.nativeElement.querySelector('#map') as HTMLElement,
      {
        zoom: 10,
        center: position,
        mapId: mapID,
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
