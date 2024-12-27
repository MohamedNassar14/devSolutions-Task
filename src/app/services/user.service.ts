import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) { }

  getCategories():Observable<string[]>
  {
    return this._httpClient.get<string[]>(`${environment.baseUrl}/products/categories`);
  }

  getAllProducts():Observable<Product[]>
  {
    return this._httpClient.get<Product[]>(`${environment.baseUrl}/products`);
  }
  getProductsByCategory(category:string):Observable<Product[]>
  {
    return this._httpClient.get<Product[]>(`${environment.baseUrl}/products/category/${category}`)
  }
}
