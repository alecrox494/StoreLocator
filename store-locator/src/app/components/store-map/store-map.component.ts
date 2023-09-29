import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { MapCoords } from 'src/app/interfaces/map.interface';
import { Observable } from 'rxjs';
import { GoogleMapService } from 'src/app/services/google-map.service';

@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.component.html',
  styleUrls: ['./store-map.component.scss']
})
export class StoreMapComponent implements AfterViewInit {
  @Input() coordsList!: Observable<Array<MapCoords>>;

  constructor(private elementRef: ElementRef, private mapService: GoogleMapService) { }


  ngAfterViewInit(): void {
    this.coordsList.subscribe((coords) => {
      this.mapService.initMap(
        coords,
        this.elementRef.nativeElement.querySelector('#map') as HTMLElement,
        {zoom: 6});
    });
  }
}
