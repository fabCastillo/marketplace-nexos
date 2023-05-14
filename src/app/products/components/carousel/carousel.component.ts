import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() public height: number = 500;
  @Input() public items: Product[] = [];
  public finalHeight: string|number = 0;
  public currentPosition: number = 0;
  
  constructor(private productServices: ProductsService){
    this.finalHeight = `${this.height}px`;
  }

  async ngOnInit(): Promise<void> {
    await this.getProductsFromAPI();
    this.items.map( (item,index) => {
      item.id = index;
      item.marginLeft = 0;
    });
    this.startSlide();
  }

  startSlide() {
    let interval = setInterval(()=>{
      this.setNext();
    }, 5000);
  }

  setCurrentPosition(position: number){
    this.currentPosition = position;
    const foundItem = this.items.find(item => item.id === 0);
    if (foundItem) {
      foundItem.marginLeft = -100 * position;
    }
  }

  setNext(){
    let finalPercentage: number = 0;
    let nextPosition: number = this.currentPosition + 1;
    
    if(nextPosition <= this.items.length - 1) {
     
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    const foundItem = this.items.find(item => item.id === 0);
    if (foundItem) {
      foundItem.marginLeft = finalPercentage;
    }
    this.currentPosition = nextPosition;
  }

  setBack(){
    let finalPercentage: number = 0;
    let backPosition: number = this.currentPosition - 1;
    if( backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    const foundItem = this.items.find(item => item.id === 0);
    if (foundItem) {
      foundItem.marginLeft = finalPercentage;
    }
    this.currentPosition = backPosition;
  }

  getProductsFromAPI(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.productServices.getProductsMinimalPrice().subscribe(
        (products) => {
          products.forEach((item) => {
            this.items.push(item);
          });
        },
        (error) => {
          console.error('Error al obtener las imágenes:', error);
          reject(error);
        },
        () => {
          resolve(); // Resolvemos la promesa cuando se completa la suscripción
        }
      );
    });
  }
}
