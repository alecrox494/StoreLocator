import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { StoresListComponent } from './components/stores-list/stores-list.component';
import { StoreDetailsComponent } from './components/store-details/store-details.component';
import { StoreMapComponent } from './components/store-map/store-map.component';
import { StoreFormComponent } from './components/store-form/store-form.component';
import { StoreAddComponent } from './components/store-add/store-add.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { ManageStoresComponent } from './pages/manage-stores/manage-stores.component';

//Material - Icons
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio'
import {MatButtonModule} from '@angular/material/button';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    StoresListComponent,
    StoreDetailsComponent,
    StoreMapComponent,
    HomeComponent,
    StoreFormComponent,
    ManageStoresComponent,
    StoreAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
