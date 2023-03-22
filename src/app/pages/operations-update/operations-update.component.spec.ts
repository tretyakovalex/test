import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsUpdateComponent } from './operations-update.component';

describe('OperationsUpdateComponent', () => {
  let component: OperationsUpdateComponent;
  let fixture: ComponentFixture<OperationsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
