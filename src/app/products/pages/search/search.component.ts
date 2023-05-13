import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public searchTerm:  string = '';
  public suggestions: Product[] = [];

  constructor(private productsService: ProductsService){}

  public searching():void {
    this.productsService.getSuggestions(this.searchTerm).subscribe( product => this.suggestions = product );
  }

  public selectSuggestion(suggestion: Product):void {    
    this.suggestions = [];
    this.searchTerm = suggestion.title;
    this.productsService.getProductId(suggestion.id).subscribe( product => console.log(product) )
  }

  public clearSearchTerm():void {
    this.searchTerm = '';
  }

}
