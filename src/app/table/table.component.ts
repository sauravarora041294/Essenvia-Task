import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-table-search',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public searchValue: string = '';

  constructor(private _searchService: SearchService ) {
  }

  public getValue(key): void {
    if (key !== '') {
      console.log(key)
      this.searchValue = this._searchService.searchValue(key);
    } else {
      this.searchValue = '';
    }

  }
}
