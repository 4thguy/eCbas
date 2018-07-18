import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ItemService } from '../items.service';

import { Item } from '../item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
  ) {
  }

  items: Item[];
  item: Item;

  ngOnInit() {
    this.getItems();
    this.getItem();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.getItem();
      }
    );
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  getItem(): void {
    var id = + this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.itemService.getItem(id)
        .subscribe(item => this.item = item);
    }
  }

}
