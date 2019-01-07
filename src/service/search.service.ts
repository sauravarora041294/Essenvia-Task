import {Injectable} from '@angular/core';
import {dummyObject} from './dummy-data';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class SearchService {

  public map;
  public keySubject: BehaviorSubject<Object[]> = new BehaviorSubject([]);

  constructor() {
   this.map = new Map();
    this.buildMap();
  }

  public buildMap() {
    dummyObject.forEach((o) => {
      this.map.set(o.key, o.value1);
    });
  }

  searchKey(text: string) {
    if (text === '') {
      this.keySubject.next([]);
      return this.keySubject;
    }
    let itr = this.map.keys();
    const search_result = Array.from(itr).filter((item) => {
      return item.toString().includes(text);
    });
    this.keySubject.next(search_result);
    return this.keySubject;
  }

  searchValue(key: string) {
    return this.map.get(key);
  }
}
