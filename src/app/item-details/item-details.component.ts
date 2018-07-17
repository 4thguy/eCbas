import { Component, OnInit } from '@angular/core';

import { ItemService } from '../items.service';

import { Item } from '../item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(
    private itemService: ItemService,
  ) { }

  items: Item[];

  ngOnInit() {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }

}
