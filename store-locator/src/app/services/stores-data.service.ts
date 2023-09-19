import { Injectable } from '@angular/core';
import { Store } from '../interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class StoresDataService {

  private storesList: Array<Store> = [
    {
      ID: 55708,
      address: "2 Davies Street",
      bookable: false,
      countryIso: "GB",
      email: "Bourdon.House@dunhill.com",
      hasPickupInStore: false,
      hasTailorBooking: false,
      lat: "51.5108110",
      lng: "-0.1471530"
    },
    {
      ID: 55707,
      address: "48 Jermyn Street",
      bookable: false,
      countryIso: "GB",
      email: "dunhill.jermyn@dunhill.com",
      hasPickupInStore: false,
      hasTailorBooking: false,
      lat: "51.5079550",
      lng: "-0.1384730"
    },
    {
      ID: 55706,
      address: "Unit 41, Pingle Drive",
      bookable: false,
      countryIso: "GB",
      email: "retail.bicester@dunhill.com",
      hasPickupInStore: false,
      hasTailorBooking: false,
      lat: "51.8923165",
      lng: "-1.1546622"
    }
  ];

  constructor() { }

  getStoresList(): Array<Store> {
    return this.storesList;
  }

  getStoreById(id: number): Store | undefined {
    return this.storesList.find(store => store.ID === id);
  }

}
