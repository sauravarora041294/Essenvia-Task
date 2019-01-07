import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/internal/operators';
import {switchMap} from 'rxjs/internal/operators';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {
  results: any[] = [];
  @Output() selectText = new EventEmitter<string>();
  searchField: FormControl = new FormControl();
  search_value = '';

  constructor(private _searchService: SearchService) {}

  ngOnInit() {
    this.searchField.valueChanges.pipe(debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) =>  this._searchService.searchKey(query)))
          .subscribe(res => {
            if (res.length) {
              this.results = res;
            } else {
              this.results.length = 0;
              this.selectText.emit('');
            }
          });
  }

  onSelectValue(val) {
    this.results.length = 0;
    if (val !== '') {
      this.search_value = val;
      console.log(this.search_value);
      this.selectText.emit(this.search_value);
    } else {
      return false;
      }
  }

}

