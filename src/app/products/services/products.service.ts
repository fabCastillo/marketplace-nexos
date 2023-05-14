import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient){}

  getSuggestionsByTitle( termino: string ): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/?title=${termino}`);
  }

  getProductById( id: number ): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  getProductsMinimalPrice(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/?price_max=900&offset=0&limit=5`);
  }

}
