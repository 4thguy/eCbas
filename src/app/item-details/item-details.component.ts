import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as userActions from '../actions/user';
import * as userReducer from '../reducers/user';
import { User } from '../user';

import { ActivatedRoute } from '@angular/router';

import { ItemService } from '../items.service';

import { Item } from '../item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  user$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private store : Store<userReducer.State>,
  ) {
    this.user$ = this.store.select('user');
  }

  items: Item[];
  item: Item;
  itemFound: boolean = true;

  ngOnInit() {
    this.getItems();
    this.getItem();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.getItem();
      }
    );
    this.user$.subscribe((userState) => {
      if (userState.user === null) {
        this.goOut();
      }
    });
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  getItem(): void {
    var id = + this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.itemService.getItem(id)
        .subscribe(item => {
          //basic validation to see if we can display the item
          if (item === undefined) {
            this.itemFound = false;
            this.item = undefined;
          } else {
            this.itemFound = true;
            this.item = item
          }
        });
    }
  }

  //ToDo:
  //this is a very simple way of protecting the page from unauthorized users
  //ideally we make this check before even loading the page to protect the data
  goOut() {
    this.router.navigate(['/']);
  }

}
