import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from 'src/app/interfaces/store.interface';
import { StoresDataService } from 'src/app/services/stores-data.service';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.scss']
})
export class StoreAddComponent implements OnInit {
  storeDataFormToAdd!: FormGroup;

  constructor(private StoreService: StoresDataService ) { }

  ngOnInit(): void {
    this.storeDataFormToAdd = new FormGroup({
      address: new FormControl('', Validators.required),
      bookable: new FormControl('false', Validators.required),
      countryIso: new FormControl('IT', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]),
      email: new FormControl('...@stores.com', [Validators.required, Validators.email]),
      hasPickupInStore: new FormControl('true', Validators.required),
      hasTailorBooking: new FormControl('true', Validators.required),
      lat: new FormControl('', Validators.required),
      lng: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log('storeAdd:', this.storeDataFormToAdd);
    const newStoreData: Store = {
      ID : 0,
      address : this.storeDataFormToAdd.value.address,
      bookable: this.storeDataFormToAdd.value.bookable,
      countryIso: this.storeDataFormToAdd.value.countryIso,
      email: this.storeDataFormToAdd.value.email,
      hasPickupInStore: this.storeDataFormToAdd.value.hasPickupInStore,
      hasTailorBooking: this.storeDataFormToAdd.value.hasTailorBooking,
      lat: this.storeDataFormToAdd.value.lat,
      lng: this.storeDataFormToAdd.value.lng
    };
    //dbcall
    this.StoreService.addStoreData(newStoreData);
  }

}
