import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { IcecreamFlavor } from './icecream-flavor';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  icecreamFlavors: IcecreamFlavor[] = []
  icecreamFlavorId!: number;
  @Output() flavorId = new EventEmitter()
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getIcecreamFlavour();
    this.getIcecreamFlavorId();
  }

  getIcecreamFlavour() {
    this.http
      .get<any>('https://localhost:44352/api/Flavour')
      .pipe(
        map((icecreamFlavors) => {
          icecreamFlavors.forEach((icecreamFlavor: IcecreamFlavor) => {
            this.icecreamFlavors.push({ id: icecreamFlavor.id, name: icecreamFlavor.name, isAvailable: icecreamFlavor.isAvailable });
            this.icecreamFlavorId = icecreamFlavor.id;
            console.log(icecreamFlavor.id)
          });
          return this.icecreamFlavors;
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  //only for debugging will be removed
  getIcecreamFlavorId() {
    this.http.get('https://localhost:44352/api/Packet').subscribe((res)=>{
      console.log(res)
    })
  }
}
