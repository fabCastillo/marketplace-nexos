import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchTerm:  string = '';
  public filterSuggestions: Product[] = [];
  private suggestions: Product[] = [];

  constructor(private productsService: ProductsService){
    this.searching();
  }

  public searching():void {
    this.productsService.getSuggestionsByTitle(this.searchTerm).subscribe( product => this.suggestions = product );
  }

  public filterSuggestionsBySearchTerm():void {
    this.filterSuggestions = this.suggestions.filter( product => this.compareTitle(product.title) );
  }

  private compareTitle(title: string):boolean {
    return this.transformStringToLowerCase(title).includes(this.searchTerm.toLocaleLowerCase());
  }

  private transformStringToLowerCase(title: string):string {
    return title.toLocaleLowerCase();
  }

  public selectSuggestion(suggestion: Product):void {    
    this.filterSuggestions = [];
    this.searchTerm = suggestion.title;
    this.productsService.getProductById(suggestion.id).subscribe( product => console.log(product) )
  }

  public clearSearchTerm():void {
    this.searchTerm = '';
  }

}
