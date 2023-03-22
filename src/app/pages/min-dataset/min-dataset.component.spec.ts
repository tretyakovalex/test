import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinDatasetComponent } from './min-dataset.component';

describe('MinDatasetComponent', () => {
  let component: MinDatasetComponent;
  let fixture: ComponentFixture<MinDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinDatasetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
