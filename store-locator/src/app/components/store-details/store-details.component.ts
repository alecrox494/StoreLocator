import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/interfaces/store.interface';
import { StoresDataService } from 'src/app/services/stores-data.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {
  @Input() storeIDs!: Observable<number>;
  store: Store = {} as Store;

  constructor(private storeService: StoresDataService) { }

  ngOnInit(): void {
    this.storeIDs.subscribe((id) => {this.store = this.storeService.getStoreById(id) as Store;});
  }

}
