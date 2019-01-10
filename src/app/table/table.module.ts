import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../search/search.module';
import { TableComponent } from './table.component';
import {SearchResultModule} from '../search-result/search-result.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SearchModule,
    SearchResultModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
