import { Injectable } from '@angular/core';
import { Store } from '../interfaces/store.interface';
import { MapCoords } from '../interfaces/map.interface';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app.config';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoresDataService {

  private storesList: Array<Store> = [
    {
      ID: 55708,
      address: "2 Davies Street",
      bookable: false,
      countryIso: "IT",
      email: "stores.milan@stores.com",
      hasPickupInStore: false,
      hasTailorBooking: false,
      lat: 45.4668609,
      lng: 9.1738406
    },
    {
      ID: 55707,
      address: "48 Jermyn Street",
      bookable: false,
      countryIso: "GB",
      email: "stores.london@stores.com",
      hasPickupInStore: true,
      hasTailorBooking: false,
      lat: 51.5079550,
      lng: -0.1384730
    },
    {
      ID: 55706,
      address: "Unit 41, Pingle Drive",
      bookable: false,
      countryIso: "FR",
      email: "store.paris@stores.com",
      hasPickupInStore: false,
      hasTailorBooking: true,
      lat: 48.8522493,
      lng: 2.3415312
    }
  ];

  constructor(private http: HttpClient) { }

  getStoresList(): Array<Store> {
    return this.storesList;
  }

  getObservableStoresList(): Observable<Array<Store>> {
    const endpoint = `${AppConfig.getBkEndpoint()}/stores/`;
    const obsStoreList: Observable<Array<Store>> = this.http.get<Array<Store>>(endpoint).pipe(
      map((stores) => {
        stores.forEach(store => {
          store.ID = parseInt(store.ID as unknown as string);
          store.bookable = store.bookable as unknown as string === '1' ? true : false;
          store.hasPickupInStore = store.hasPickupInStore as unknown as string === '1' ? true : false;
          store.hasTailorBooking = store.hasTailorBooking as unknown as string === '1' ? true : false;
          store.lat = parseFloat(store.lat as unknown as string);
          store.lng = parseFloat(store.lng as unknown as string);
        });
        return stores;
      })
    )

    obsStoreList.subscribe(stores => this.storesList = stores);

    return obsStoreList
  }

  getStoreById(id: number): Store | undefined {
    return this.storesList.find(store => store.ID === id);
  }

  getStoresCoords(): Array<MapCoords> {
    return this.storesList.map(store => {
      return {
        lat: store.lat,
        lng: store.lng
      }
    });
  }
}
