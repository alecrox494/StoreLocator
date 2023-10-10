import { MapCoords } from './../../interfaces/map.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/interfaces/store.interface';
import { StoresDataService } from 'src/app/services/stores-data.service';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {
  @Input() storeIDs!: Observable<number>;
  store: Store = {} as Store;
  specificMapCoords: BehaviorSubject <Array<MapCoords>> = new BehaviorSubject<Array<MapCoords>>([{} as MapCoords]);

  // Font Awesome icons
  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;


  constructor(private storeService: StoresDataService) { }

  ngOnInit(): void {
    this.storeIDs.subscribe((id) => {
      this.store = this.storeService.getStoreById(id) as Store;
      this.specificMapCoords.next([{
        lat: this.store.lat,
        lng: this.store.lng
      }]);
    });
  }
}
