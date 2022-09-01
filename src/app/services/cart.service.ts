import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  currentItemsCount = new BehaviorSubject<any>(0);
  cartItemList: any = [];
  productList = new BehaviorSubject<any>([]);

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  // setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }

  addToCart(productList: any) {
    this.cartItemList = productList;
    this.productList.next(this.cartItemList);
  }

  emptyCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  getItemsCount(itemsCount: any) {
    this.currentItemsCount.next(itemsCount);
  }
}
