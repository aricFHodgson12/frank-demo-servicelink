import { Component, OnInit } from '@angular/core';

import {
  Item
} from '../core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: Item[] = [];

  constructor(
  ) {
    this.list = [
      {
        id: 1,
        title: 'Irrigation Room'
      },
      {
        id: 2,
        title: 'Living Room'
      },
      {
        id: 3,
        title: 'Dining Room'
      },
      {
        id: 4,
        title: 'Bedroom 1'
      },            
    ];
  }
  
  ngOnInit() {
  }

}
