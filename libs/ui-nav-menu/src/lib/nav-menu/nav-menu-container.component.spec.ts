import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuContainerComponent } from './nav-menu-container.component';

describe('NavMenuContainerComponent', () => {
  let component: NavMenuContainerComponent;
  let fixture: ComponentFixture<NavMenuContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavMenuContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
