import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'app/services/cart.service';
import { map, Subscription } from 'rxjs';
import { Icecream } from '../../icecream';
import { IcecreamFlavor } from '../products/icecream-flavor';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('icecreamSelect') icecreamSelect: any;
  subscription!: Subscription;
  icecreamFlavorId!: number;
  icecreamFlavor!: IcecreamFlavor;
  conePrices!: any;
  cupPrices!: any;
  conePrice!: any;
  cupPrice!: any;
  iceCreamType!: string;
  icecreamList: Icecream[] = [];
  icecreamSize!: any;
  isCone = false;
  isCup = false;
  isSizeSelected = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.icecreamFlavorId = params['id'];
    });
    // console.log(this.icecreamFlavorId);
    this.getIcecreamDetails();
  }

  getIcecreamDetails() {
    this.http
      .get<any>(`https://localhost:44352/api/Flavour/${this.icecreamFlavorId}`)
      .subscribe((icecreamFlavor) => {
        this.icecreamFlavor = icecreamFlavor;
        // console.log(this.icecreamFlavor);
      });
  }

  onChoosingCone() {
    this.http
      .get<any>('https://localhost:44352/api/Packet')
      .pipe(
        map((res) => {
          this.conePrices = {
            small: res[0].prices[0],
            medium: res[0].prices[1],
            large: res[0].prices[2],
          };

          return this.conePrices;
        })
      )
      .subscribe((res) => {
        // console.log(res);
      });
    this.iceCreamType = 'cone';
    this.isCone = true;
    this.isCup = false;
  }

  onChoosingCup() {
    this.http
      .get<any>('https://localhost:44352/api/Packet')
      .pipe(
        map((res) => {
          this.cupPrices = {
            small: res[1].prices[0],
            medium: res[1].prices[1],
            large: res[1].prices[2],
          };
          return this.cupPrices;
        })
      )
      .subscribe((res) => {
        // console.log(res);
      });
    this.iceCreamType = 'cup';
    this.isCone = false;
    this.isCup = true;
  }

  onChoosingSize(event: any) {
    this.icecreamSize = event.target.value;
    if (this.isCone) {
      switch (this.icecreamSize) {
        case 'small':
          this.conePrice = +this.conePrices.small.price;
          break;
        case 'medium':
          this.conePrice = +this.conePrices.medium.price;
          break;
        case 'large':
          this.conePrice = +this.conePrices.large.price;
      }
    } else if (this.isCup) {
      switch (this.icecreamSize) {
        case 'small':
          this.cupPrice = +this.cupPrices.small.price;
          break;
        case 'medium':
          this.cupPrice = +this.cupPrices.medium.price;
          break;
        case 'large':
          this.cupPrice = +this.cupPrices.large.price;
      }
    }
    this.isSizeSelected = true;
  }

  resetSelection() {
    this.isSizeSelected = false;
    this.icecreamSelect.nativeElement.selectedIndex = 0;
  }

  addToCart() {
    let icecream = {
      id: this.icecreamFlavor.id,
      name: this.icecreamFlavor.name,
      type: this.iceCreamType,
      size: this.icecreamSize,
      price: 0,
    };
    this.resetSelection();
    if (this.isCone) {
      icecream = {
        ...icecream,
        price: +this.conePrice,
      };
      this.icecreamList?.push(icecream);
    }
    if (this.isCup) {
      icecream = {
        ...icecream,
        price: +this.cupPrice,
      };
      this.icecreamList?.push(icecream);
    }
    this.cartService.addToCart(this.icecreamList);
    this.cartService.getItemsCount(this.icecreamList.length);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
