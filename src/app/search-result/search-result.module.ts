import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SearchResultComponent} from './search-result.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchResultComponent
  ]
})
export class SearchResultModule { }
