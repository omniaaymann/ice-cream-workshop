import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {
  cartCount: number = 0;
  cartItemsSubscription!: Subscription;

  constructor(private cartService: CartService) { }

  // totalItems: number = 0;

  ngOnInit(): void {
     this.cartItemsSubscription = this.cartService.currentItemsCount.subscribe((cartCount) => {
      this.cartCount = cartCount;
   });
  }

  ngOnDestroy() {
    this.cartItemsSubscription.unsubscribe();
  }

}
