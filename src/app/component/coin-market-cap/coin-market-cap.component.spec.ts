import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinMarketCapComponent } from './coin-market-cap.component';

describe('CoinMarketCapComponent', () => {
  let component: CoinMarketCapComponent;
  let fixture: ComponentFixture<CoinMarketCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinMarketCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinMarketCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
