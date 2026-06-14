import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CardLabel } from "./card-label/card-label";
import { CardPricing } from "./card-pricing/card-pricing";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabel, CardPricing],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input()
  gameCover: string = "";

  @Input()
  gameLabel: string = "";

  @Input()
  gameType: string = "";

  @Input()
  gamePricing: string = "";

  @Input()
  gamePriceTitle: string = "";

  @Input()
  gameLink: string = "";
  


}
