import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerResultsComponent } from './deezer-results.component';

describe('DeezerResultsComponent', () => {
  let component: DeezerResultsComponent;
  let fixture: ComponentFixture<DeezerResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
