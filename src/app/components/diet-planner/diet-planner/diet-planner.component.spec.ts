import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPlannerComponent } from './diet-planner.component';

describe('DietPlannerComponent', () => {
  let component: DietPlannerComponent;
  let fixture: ComponentFixture<DietPlannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietPlannerComponent]
    });
    fixture = TestBed.createComponent(DietPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
