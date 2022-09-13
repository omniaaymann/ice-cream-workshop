import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestApiService } from 'app/services/rest-api.service';
import { map } from 'rxjs';
import { IcecreamFlavor } from './icecream-flavor';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  icecreamFlavors: IcecreamFlavor[] = [];
  icecreamFlavorId!: number;
  @Output() flavorId = new EventEmitter();
  constructor(private http: HttpClient, private ApiService: RestApiService) {}

  ngOnInit(): void {
    this.loadIcecreamFlavors();
  }

  loadIcecreamFlavors() {
    this.ApiService.getIcecreamFlavors()
      .pipe(
        map((icecreamFlavors) => {
          icecreamFlavors.forEach((icecreamFlavor: IcecreamFlavor) => {
            this.icecreamFlavors.push({
              id: icecreamFlavor.id,
              name: icecreamFlavor.name,
              isAvailable: icecreamFlavor.isAvailable,
            });
            this.icecreamFlavorId = icecreamFlavor.id;
          });
          return this.icecreamFlavors;
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
