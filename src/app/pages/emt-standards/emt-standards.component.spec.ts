import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmtStandardsComponent } from './emt-standards.component';

describe('EmtStandardsComponent', () => {
  let component: EmtStandardsComponent;
  let fixture: ComponentFixture<EmtStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmtStandardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmtStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
