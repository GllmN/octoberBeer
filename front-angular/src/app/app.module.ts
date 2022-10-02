import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { BeerListComponent } from './components/beer/beer-list/beer-list.component';
import { BeerDetailComponent } from './components/beer/beer-detail/beer-detail.component';
import { BeerFormComponent } from './components/beer/beer-form/beer-form.component';
import { NavigateComponent } from './components/navigate/navigate.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailComponent,
    BeerFormComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
