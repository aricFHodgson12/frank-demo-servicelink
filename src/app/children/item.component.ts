import { Component, OnInit, Input } from '@angular/core';
import {
  Item
} from '../core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() val: Number;
  @Input() checked: Boolean;

  constructor(
  ) {
    this.item = {
      id: 0,
      title: ''
    };

    this.val = 1;

    this.checked = false;
  }
  
  ngOnInit() {

  }

  checkValue(event:Event){
    const isChecked = (<HTMLInputElement>event.target).checked;
    this.checked = isChecked;
  }

  plus () {
    const val = +this.val + 1;
    this.val = val;
  }

  minus () {
    const val = +this.val - 1;
    this.val = val;
  }  

}
