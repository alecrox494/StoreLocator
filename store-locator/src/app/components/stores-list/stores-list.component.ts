import { ActivatedRoute, Router } from '@angular/router';
import { MapCoords } from './../../interfaces/map.interface';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from 'src/app/interfaces/store.interface';
import { StoresDataService } from 'src/app/services/stores-data.service';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['ID', 'address', 'bookable', 'countryIso', 'email', 'hasPickupInStore', 'hasTailorBooking', 'lat', 'lng'];
  storeList: Array<Store> = [];
  clickedRows = new Set<Store>();
  activeStoreID: number | undefined;
  storeIDs:BehaviorSubject <number> = new BehaviorSubject<number>(0);
  storeCoordsList:BehaviorSubject <Array<MapCoords>> = new BehaviorSubject<Array<MapCoords>> ([]);
  hasLinksIdParam: boolean = false;
  singleStoreActive: boolean = false;

  constructor(private storeService: StoresDataService, private elementRef: ElementRef, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.storeService.getObservableStoresList().subscribe((stores) => {
      this.storeList = stores;
      this.storeCoordsList.next(this.storeService.getStoresCoords());
      this.hasLinksIdParam = this.route.snapshot.paramMap.has('id');
      if(this.hasLinksIdParam) {
        this.activeStoreID = Number(this.route.snapshot.paramMap.get('id'));
        this.singleStoreActive = true;
        this.storeIDs.next(this.activeStoreID as number);
      }
    });
  }

  ngAfterViewInit(): void {
    this.firstAttemptSetActiveRow();
  }

  clickRow(row: Store, event: Event) {
    const target = event.target as HTMLTableCellElement;
    const container = target.parentElement as HTMLTableRowElement;
    this.setActiveRow(container);
    const storeData = row;
    this.storeIDs.next(storeData.ID as number);
    this.singleStoreActive = true;
    let storeRoute: string;
    if(this.hasLinksIdParam) {
      storeRoute = `../${storeData.ID}`;
    } else {
      storeRoute = `../stores/${storeData.ID}`;
    }
    this.router.navigate([storeRoute], { relativeTo: this.route })
  }

  firstAttemptSetActiveRow() {
    if(this.hasLinksIdParam)
    {
      const container = this.elementRef.nativeElement.querySelector(`[data-store-id="${this.activeStoreID}"]`);
      this.setActiveRow(container);
    }
  }

  setActiveRow(element: HTMLTableRowElement) {
    const lastActive = this.elementRef.nativeElement.querySelector('.store-row-is-clicked');
    if (lastActive) {
      lastActive.classList.remove('store-row-is-clicked');
    }
    element.classList.add('store-row-is-clicked');
  }
}

