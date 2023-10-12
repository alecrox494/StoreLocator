import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from 'src/app/interfaces/store.interface';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.scss']
})
export class StoreFormComponent {
  @Input() store!: Store;

  onSubmit(form: NgForm) {
    console.log('store:', this.store);
    console.log(form);
  }
}
