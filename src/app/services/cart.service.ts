import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  currentItemsCount = new BehaviorSubject<any>(0);
  storedItemsList = new BehaviorSubject<any>([]);
  cartItem = new BehaviorSubject<any>({});
  storedItems: any;
  cartItemList: any = [];
  item: any;

  constructor() {
    const storedItems = JSON.parse(localStorage.getItem('carttItems') || '[]');
    this.getItemsCount(storedItems.length);
  }

  addToCart(product: any) {
    this.item = product;
    this.cartItemList.push(product);
    this.storeItemsInLocalStorage();
  }

  storeItemsInLocalStorage() {
    const storedItems = JSON.parse(localStorage.getItem('carttItems') || '[]');
    storedItems.push(this.item);
    this.storedItems = storedItems;
    localStorage.setItem('carttItems', JSON.stringify(storedItems));
    this.storedItemsList.next(this.storedItems);
    this.currentItemsCount.next(this.storedItems.length);
  }

  emptyCart() {
    this.storedItemsList.next([]);
    this.getItemsCount(0);
    localStorage.clear();
  }

  getItemsCount(itemsCount: any) {
    this.currentItemsCount.next(itemsCount);
  }
}
