import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'app/services/rest-api.service';
@Component({
  selector: 'app-icecream-sizes',
  templateUrl: './icecream-sizes.component.html',
  styleUrls: ['./icecream-sizes.component.scss'],
})
export class IcecreamSizesComponent implements OnInit {
  iceCreamSizes: any = [];
  columnsToDisplay = ['id', 'name', 'description'];

  constructor(private ApiService: RestApiService) {}

  ngOnInit(): void {
    this.loadSizes();
  }

  loadSizes() {
    this.ApiService.getIcecreamSizes().subscribe((iceCreamSizes) => {
      this.iceCreamSizes = iceCreamSizes;
      console.log(this.iceCreamSizes);
    });
  }

  deleteSize(sizeId: any, sizeIndex: any) {
    this.ApiService.deleteIcecreamSize(sizeId).subscribe((iceCreamSizes) => {
      this.iceCreamSizes = this.iceCreamSizes.splice(sizeIndex, 1);
      this.loadSizes();
    });
  }

  addSize(sizeName: any, description: any) {
    this.ApiService.addIcecreamSize(sizeName, description).subscribe(
      (iceCreamSize) => {
        this.iceCreamSizes.push(iceCreamSize);
        this.loadSizes();
      }
    );
    console.log(sizeName.value, description.value);
  }
}
