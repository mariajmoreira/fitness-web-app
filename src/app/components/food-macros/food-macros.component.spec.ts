import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMacrosComponent } from './food-macros.component';

describe('FoodMacrosComponent', () => {
  let component: FoodMacrosComponent;
  let fixture: ComponentFixture<FoodMacrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMacrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMacrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
