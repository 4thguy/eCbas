import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemDetails } from './item-details/item-details.component';

const routes: Routes = [
  { path: 'item-details/:id', component: ItemDetails },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
