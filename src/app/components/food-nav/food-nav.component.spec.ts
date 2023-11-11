import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodNavComponent } from './food-nav.component';

describe('FoodNavComponent', () => {
  let component: FoodNavComponent;
  let fixture: ComponentFixture<FoodNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodNavComponent]
    });
    fixture = TestBed.createComponent(FoodNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
