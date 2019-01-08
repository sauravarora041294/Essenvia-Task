import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ContextMenuComponent} from 'ngx-contextmenu';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  @ViewChild('tableRef') tableRef: ElementRef;

  public tableData: any;

  constructor() {
    this.tableData = [
      ['one', 'two', 'three'],
      ['one', 'two', 'three'],
      ['one', 'two', 'three']
    ];
  }
  public addRow(val, flag): void {
    this.tableRef.nativeElement.insertRow(flag);
    const col_len = this.tableData[0].length;
    var temp = new Array(col_len);
    for (let i = 0; i < col_len; i++) {
      temp[i] = '...';
    }
    if (flag === 0) {
      this.tableData.unshift(temp);
    } else if ( flag === this.tableData.length ) {
      this.tableData.push(temp);
    } else {
      const rem = this.tableData.splice(flag, 0, temp);
    }
  }

  public addColumn(val, flag): void {
     const row_len = this.tableData.length;
    for (let i = 0; i < row_len; i++) {
      if (flag === 0) {
        this.tableData[i].unshift('...');
      } else if (flag === this.tableData[i].length) {
        this.tableData[i].push('...');
      } else {
        const mid = this.tableData[i].splice(flag, 0, '...');
      }
    }
  }

  public delRow(val, flag): void {
    this.tableData.splice(flag, 1);
  }

  public delColumn(val, flag): void {
    let row_len = this.tableData.length;
    for( let i=0; i<row_len; i++) {
      this.tableData[i].splice(flag, 1);
    }
  }
}
