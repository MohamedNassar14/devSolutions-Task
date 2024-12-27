import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _httpClient:HttpClient) { }

  getAllProducts():Observable<Product[]>
  {
     return this._httpClient.get<Product[]>(`${environment.baseUrl}/products`);
  }

   getCategories():Observable<string[]>
  {
    return this._httpClient.get<string[]>(`${environment.baseUrl}/products/categories`);
  }

  addNewProduct(productData:Product)
  {
    return this._httpClient.post(`${environment.baseUrl}/products`, productData);
  }

  updateProduct( id:number, productUpdate:Product)
  {
   return this._httpClient.put(`${environment.baseUrl}/products/${id}`, productUpdate);
  }
  
}
