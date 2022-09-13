import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private http: HttpClient) {}

  getIcecreamFlavors() {
    return this.http.get<any>('https://localhost:44352/api/Flavour');
  }

  getIcecreamFlavorDetails(flavorId: number) {
    return this.http.get<any>(
      `https://localhost:44352/api/Flavour/${flavorId}`
    );
  }

  getIcecreamPackets() {
    return this.http.get<any>('https://localhost:44352/api/Packet');
  }

  getIcecreamPacketById(packedId: number) {
    return this.http.get<any>(`https://localhost:44352/api/Packet/${packedId}`);
  }

  getIcecreamSizes() {
    return this.http.get<any>('https://localhost:44352/api/IceCreamSize');
  }

  deleteIcecreamFlavor(flavorIndex: any) {
    return this.http.delete(
      `https://localhost:44352/api/Flavour/${flavorIndex}`
    );
  }

  deleteIcecreamSize(sizeId: any) {
    return this.http.delete(
      `https://localhost:44352/api/IceCreamSize/${sizeId}`
    );
  }

  addIcecreamFlavor(flavorName: any) {
    return this.http.post<any>('https://localhost:44352/api/Flavour', {
      name: flavorName.value,
      isAvailable: true,
    });
  }

  addIcecreamSize(sizeName: any, description: any) {
    return this.http
    .post<any>('https://localhost:44352/api/IceCreamSize', {
      name: sizeName.value,
      description: description.value,
    })
  }
}
