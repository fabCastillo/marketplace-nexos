import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient){}

  getSuggestions( termino: string ): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/?title=${termino}`);
  }

  getProductId( id: number ): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

}
