import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  imports: [],
  templateUrl: './card-pricing.html',
  styleUrl: './card-pricing.css',
})
export class CardPricing {
    
  @Input()
  gamePriceTitle: string = "";

  @Input()
  cardType: string = "";
  
  @Input()
  cardPricing: string = "";
  

}
