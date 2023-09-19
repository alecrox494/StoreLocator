import { Component , OnInit} from '@angular/core';
import { Store } from 'src/app/interfaces/store.interface';
import { StoresDataService } from 'src/app/services/stores-data.service';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit {

  storeList: Array<Store> = [];

  constructor(private storeService: StoresDataService) { }

  ngOnInit(): void {
    this.storeList = this.storeService.getStoresList();
  }

}
