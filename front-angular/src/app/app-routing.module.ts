import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { BeerListComponent } from './components/beer/beer-list/beer-list.component';
import { BeerDetailComponent } from './components/beer/beer-detail/beer-detail.component';
import { BeerFormComponent } from './components/beer/beer-form/beer-form.component';

const routes: Routes = [
    {path: 'beer-list', component: BeerListComponent},
    {path: 'beer-form', component: BeerFormComponent},
    {path: 'beer-form/:id', component: BeerFormComponent},
    {path: 'beer-detail', component: BeerDetailComponent},
    {path: 'beer-detail/:id', component: BeerDetailComponent},
    // Home page :
    {path: '', redirectTo: 'beer-list', pathMatch: 'full'},
]

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(routes),
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }