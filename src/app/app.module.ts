import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchService } from '../service/search.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from './search/search.module';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import {TableModule} from './table/table.module';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomTableModule} from './custom-table/custom-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomTableModule,
    ReactiveFormsModule,
    TableModule,
    SearchModule,
    RichTextEditorAllModule
  ],
  providers: [
    SearchService,
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
