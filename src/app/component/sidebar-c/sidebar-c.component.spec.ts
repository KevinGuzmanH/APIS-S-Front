import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCComponent } from './sidebar-c.component';

describe('SidebarCComponent', () => {
  let component: SidebarCComponent;
  let fixture: ComponentFixture<SidebarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
