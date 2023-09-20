import { Component, OnInit, ElementRef} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from 'src/app/interfaces/store.interface';
import { StoresDataService } from 'src/app/services/stores-data.service';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'address', 'bookable', 'countryIso', 'email', 'hasPickupInStore', 'hasTailorBooking', 'lat', 'lng'];
  storeList: Array<Store> = [];
  clickedRows = new Set<Store>();
  storeIDs:BehaviorSubject <number> = new BehaviorSubject<number>(0);
  storeClicked: boolean = false;

  constructor(private storeService: StoresDataService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.storeList = this.storeService.getStoresList();
    this.storeIDs.subscribe((id) => {
      console.log(id);
    });
  }

  clickRow(row: Store, event: Event) {
    const target = event.target as HTMLTableCellElement;
    const container = target.parentElement as HTMLTableRowElement;
    this.addActiveRow(container);
    const storeData = row;
    this.storeIDs.next(storeData.ID);
    this.storeClicked = true;
  }

  addActiveRow(element: HTMLTableRowElement) {
    const lastActive = this.elementRef.nativeElement.querySelector('.store-row-is-clicked');
    if (lastActive) {
      lastActive.classList.remove('store-row-is-clicked');
    }
    element.classList.add('store-row-is-clicked');
  }

}

