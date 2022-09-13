import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.scss'],
})
export class CartScreenComponent implements OnInit {
  cartItems: any = [];
  cartItem: any;
  totalItems!: Observable<any>;
  totalPrice!: number;
  prices: any = [];
  storedItems: any;
  itemsAreAvailable = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getProducts();
    if (this.storedItems?.length >= 1) {
      this.itemsAreAvailable = true;
    }
    this.getTotalPrice();
    this.totalItems = this.cartService.currentItemsCount.asObservable();
  }

  getProducts() {
    const storedItems = JSON.parse(localStorage.getItem('carttItems') || '[]');
    this.storedItems = storedItems;
  }

  getTotalPrice() {
    this.prices = [];
    this.storedItems.forEach((product: any) => {
      this.cartItem = product;
      this.prices.push(+product.price);
    });
    this.totalPrice = this.prices.reduce(
      (partialSum: any, a: any) => partialSum + a,
      0
    );
  }

  deleteItem(i: any) {
    this.storedItems.splice(i, 1);
    if (this.storedItems.length < 1) {
      this.itemsAreAvailable = false;
    }
    localStorage.setItem('carttItems', JSON.stringify(this.storedItems));
    this.getTotalPrice();
    this.cartService.getItemsCount(this.storedItems.length);
  }

  emptyCart() {
    this.cartService.emptyCart();
    this.itemsAreAvailable = false;
    this.totalPrice = 0;
  }
}
