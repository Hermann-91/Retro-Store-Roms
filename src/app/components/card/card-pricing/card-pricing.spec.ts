import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPricing } from './card-pricing';

describe('CardPricing', () => {
  let component: CardPricing;
  let fixture: ComponentFixture<CardPricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPricing],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPricing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
