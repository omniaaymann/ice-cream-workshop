import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.scss'],
})
export class CartScreenComponent implements OnInit {
  cartItems: any = [];
  cartItem: any;
  totalItems: number = 0;
  totalPrice!: number;
  prices: any = [];
  itemsAreAvailable = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((products) => {
      if (products.length >= 1) {
        this.itemsAreAvailable = true;
      }
      this.cartItems = products;
      this.totalItems = products.length;
    });
    this.getTotalPrice();
  }

  getTotalPrice() {
    this.prices = [];
    this.cartItems.forEach((product: any) => {
      this.cartItem = product;
      this.prices.push(+product.price);
    });
    this.totalPrice = this.prices.reduce(
      (partialSum: any, a: any) => partialSum + a,
      0
    );
  }

  deleteItem(i: any) {
    this.cartItems.splice(i, 1);
    this.totalItems = this.totalItems - 1;
    if (this.cartItems.length < 1) {
      this.itemsAreAvailable = false;
    }
    this.getTotalPrice();
    this.cartService.getItemsCount(this.totalItems);
  }

  emptyCart() {
    this.cartService.emptyCart();
  }
}
