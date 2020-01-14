export class Product {
  constructor(
    public _id: string,
    public manufacturer: string,
    public model: string,
    public picture: string,
    public price: number,
    public description: string,
    public diagonal: number,
    public typeOfMatrix: string,
    public resolution: string,
    public support3D: boolean,
    public portInterface: string,
    public available: boolean
  ) { }
}
