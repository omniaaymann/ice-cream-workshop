export interface IcecreamPacket {
  id: number;
  name: string;
  prices: [{ sizeId: number; sizeName: string; price: number }];
}
