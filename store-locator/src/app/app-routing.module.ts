import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresListComponent } from './components/stores-list/stores-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stores', component: StoresListComponent},
  {path: 'stores/:id', component: StoresListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
