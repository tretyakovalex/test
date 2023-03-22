import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRiskMappingComponent } from './health-risk-mapping.component';

describe('HealthRiskMappingComponent', () => {
  let component: HealthRiskMappingComponent;
  let fixture: ComponentFixture<HealthRiskMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthRiskMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthRiskMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
