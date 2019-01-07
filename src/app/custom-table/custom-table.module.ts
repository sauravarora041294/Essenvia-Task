import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { CustomTableComponent } from './custom-table.component';
import {ContextMenuModule} from 'ngx-contextmenu';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    ContextMenuModule.forRoot()
  ],
  exports: [
    CustomTableComponent
  ]
})
export class CustomTableModule { }
