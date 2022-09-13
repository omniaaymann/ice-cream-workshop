import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'app/services/rest-api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-icecream-types',
  templateUrl: './icecream-types.component.html',
  styleUrls: ['./icecream-types.component.scss'],
})
export class IcecreamTypesComponent implements OnInit {
  iceCreamTypes: any = [];
  columnsToDisplay = ['id', 'name'];
  constructor(private APIService: RestApiService) {}

  ngOnInit(): void {
    this.loadIcecreamTypes();
  }

  loadIcecreamTypes() {
    this.APIService.getIcecreamPackets()
      //   .pipe(
      //   map((types) => {
      //     types.forEach((type:any) => {
      //       this.iceCreamTypes.push(type.name);
      //       console.log(this.iceCreamTypes)
      //     });
      //   })
      // )
      .subscribe((icecreamTypes) => (this.iceCreamTypes = icecreamTypes));
  }
}
