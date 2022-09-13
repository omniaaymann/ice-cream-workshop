import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'app/services/rest-api.service';

@Component({
  selector: 'app-icecream-flavor',
  templateUrl: './icecream-flavor.component.html',
  styleUrls: ['./icecream-flavor.component.scss'],
})
export class IcecreamFlavorComponent implements OnInit {
  icecreamFlavors: any = [];
  columnsToDisplay = ['id', 'name', 'available', 'addFlavor', 'deleteFlavor'];

  constructor( private ApiService: RestApiService) {}

  ngOnInit(): void {
    this.getFlavors();
  }

  getFlavors() {
    this.ApiService.getIcecreamFlavors()
      .subscribe((iceCreamFlavors) => {
        this.icecreamFlavors = iceCreamFlavors;
        console.log(this.icecreamFlavors);
      });
  }

  deleteFlavor(flavorIndex: any) {
    this.ApiService.deleteIcecreamFlavor(flavorIndex)
      .subscribe((icecreamFlavors) => {
        this.icecreamFlavors = this.icecreamFlavors.splice(flavorIndex, 1);
        this.getFlavors();
      });
  }

  addFlavor(flavorName: any) {
    this.ApiService.addIcecreamFlavor(flavorName)
      .subscribe((icecreamFlavor) => {
        this.icecreamFlavors.push(icecreamFlavor);
        this.getFlavors();
      });
    
  }
}
