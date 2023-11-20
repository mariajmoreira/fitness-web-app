import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatsChartComponent } from './fats-chart.component';

describe('FatsChartComponent', () => {
  let component: FatsChartComponent;
  let fixture: ComponentFixture<FatsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatsChartComponent]
    });
    fixture = TestBed.createComponent(FatsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
