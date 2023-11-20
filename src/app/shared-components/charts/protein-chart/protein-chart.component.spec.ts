import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinChartComponent } from './protein-chart.component';

describe('ProteinChartComponent', () => {
  let component: ProteinChartComponent;
  let fixture: ComponentFixture<ProteinChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProteinChartComponent]
    });
    fixture = TestBed.createComponent(ProteinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
