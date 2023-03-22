import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMTOperationsSupportComponent } from './emt-operations-support.component';

describe('EMTOperationsSupportComponent', () => {
  let component: EMTOperationsSupportComponent;
  let fixture: ComponentFixture<EMTOperationsSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMTOperationsSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMTOperationsSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
