import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalizComponent } from './nationaliz.component';

describe('NationalizComponent', () => {
  let component: NationalizComponent;
  let fixture: ComponentFixture<NationalizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
