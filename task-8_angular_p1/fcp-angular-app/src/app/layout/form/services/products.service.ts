import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import initConfig from '../../../config/initConfig';
import { Product } from '../product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlApi = `${initConfig.HOST_PATH}${initConfig.EDIT_PRODUCT_PATH}`;
  private urlView = `${initConfig.BASE_PATH}${initConfig.SEARCH_PRODUCT_PATH}`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.urlView).pipe(map((data: any) => {

      let productsList = data;
      return productsList.map(function (product: any) {
        return {
          _id: product._id,
          manufacturer: product.manufacturer,
          model: product.model,
          picture: product.picture,
          price: product.price,
          description: product.description,
          diagonal: product.diagonal,
          typeOfMatrix: product.typeOfMatrix,
          resolution: product.resolution,
          support3D: product.support3D,
          portInterface: product.portInterface,
          available: product.available,
        };
      });
    }),
      catchError(err => {
        console.log(err);
        return throwError(err);
      }))
  };

  updateProductBase(_id: string, product: Product) {
    const urlParams = new HttpParams().set("_id", _id.toString());
    return this.http.put(`${this.urlApi}/${_id}`, product);
  }

  deleteProduct(_id: string) {
    return this.http.delete(`${this.urlApi}/${_id}`);
  }

  createProduct(product: Product) {
    return this.http.post(this.urlApi, product);
  }
}
