import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbsChartComponent } from './carbs-chart.component';

describe('CarbsChartComponent', () => {
  let component: CarbsChartComponent;
  let fixture: ComponentFixture<CarbsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarbsChartComponent]
    });
    fixture = TestBed.createComponent(CarbsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
