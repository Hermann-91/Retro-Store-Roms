import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLabel } from './card-label';

describe('CardLabel', () => {
  let component: CardLabel;
  let fixture: ComponentFixture<CardLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLabel],
    }).compileComponents();

    fixture = TestBed.createComponent(CardLabel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
