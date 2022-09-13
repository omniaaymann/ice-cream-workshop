import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'app/services/cart.service';
import { RestApiService } from 'app/services/rest-api.service';
import { filter, map, Subscription } from 'rxjs';
import { Icecream } from '../../models/icecream';
import { IcecreamPacket } from '../../models/icecream-packet';
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
  iceCreamType!: string;
  icecreamList: Icecream[] = [];
  icecreamSize!: any;
  isCone = false;
  isCup = false;
  isSizeSelected = false;
  icecreamPackets: IcecreamPacket[] = [];
  icecreamPacketId!: number;
  icecreamChosenPacket!: any;
  price!: number;
  prices: any = {};
  icecream!: Icecream;
  icecreamScoops: number = 0;
  sizeIds: any = {};
  sizeId: number = 0;
  scoopNumber!: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService,
    private ApiService: RestApiService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.icecreamFlavorId = params['id'];
    });
    this.loadIcecreamDFlavorDetails();
    this.loadIcecreamPackets();
  }

  loadIcecreamDFlavorDetails() {
    this.ApiService.getIcecreamFlavorDetails(this.icecreamFlavorId).subscribe(
      (icecreamFlavor) => {
        this.icecreamFlavor = icecreamFlavor;
      }
    );
  }

  loadIcecreamPackets() {
    this.ApiService.getIcecreamPackets()
      .pipe(
        map((icecreamPackets) => {
          icecreamPackets.forEach((icecreamPacket: any) => {
            this.icecreamPackets.push(icecreamPacket);
            return this.icecreamPackets;
          });
        })
      )
      .subscribe();
  }

  onChoosingType(icecreamType: any) {
    this.icecreamChosenPacket = this.icecreamPackets.filter(
      (icecreamPacket) => {
        return icecreamPacket.name === icecreamType;
      }
    );
    this.icecreamChosenPacket.map((icecreamPacket: any) => {
      console.log(icecreamPacket);
      this.icecreamPacketId = icecreamPacket.id;
      this.iceCreamType = icecreamPacket.name;
    });
    this.getChosenIcecreamType();
  }

  getChosenIcecreamType() {
    this.ApiService.getIcecreamPacketById(this.icecreamPacketId).subscribe(
      (res) => {
        console.log(res);
        if (res.name === 'Cone') {
          this.isCone = true;
          this.isCup = false;
        } else if (res.name === 'Cup') {
          this.isCone = false;
          this.isCup = true;
        }
        this.prices = {
          small: +res.prices[0].price,
          medium: +res.prices[1].price,
          large: +res.prices[2].price,
        };
        this.sizeIds = {
          small: +res.prices[0].sizeId,
          medium: +res.prices[1].sizeId,
          large: +res.prices[2].sizeId,
        };
      }
    );
  }

  onChoosingSize(event: any) {
    this.icecreamSize = event.target.value;
    switch (this.icecreamSize) {
      case 'small':
        this.price = +this.prices.small;
        this.sizeId = this.sizeIds.small;
        break;
      case 'medium':
        this.price = +this.prices.medium;
        this.sizeId = this.sizeIds.medium;
        break;
      case 'large':
        this.price = +this.prices.large;
        this.sizeId = this.sizeIds.large;
    }
    this.isSizeSelected = true;

    this.ApiService.getIcecreamSizes()
      .pipe(
        map((sizes) => {
          sizes.forEach((size: any) => {
            if (size.id === this.sizeId) {
              this.scoopNumber = size.description;
            }
          });
        })
      )
      .subscribe();
  }

  getScoopNumber() {
    this.ApiService.getIcecreamSizes()
      .pipe(
        filter((size) => {
          return size.id === this.sizeId;
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  resetSelection() {
    this.isSizeSelected = false;
    this.icecreamSelect.nativeElement.selectedIndex = 0;
  }

  addToCart() {
    this.icecream = {
      flavorId: this.icecreamFlavor.id,
      packetId: this.icecreamPacketId,
      sizeId: this.sizeId,
      flavorName: this.icecreamFlavor.name,
      type: this.iceCreamType,
      size: this.icecreamSize,
      price: this.price,
    };
    this.cartService.addToCart(this.icecream);
    this.resetSelection();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
