import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  standalone: true,
  imports: [],
  templateUrl: './card-label.html',
  styleUrl: './card-label.css',
})
export class CardLabel {
  
  @Input()
  gameLabel:string=""

}
