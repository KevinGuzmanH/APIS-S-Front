import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooComponent } from './goo.component';

describe('GooComponent', () => {
  let component: GooComponent;
  let fixture: ComponentFixture<GooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
