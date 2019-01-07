import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../search/search.module';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SearchModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
