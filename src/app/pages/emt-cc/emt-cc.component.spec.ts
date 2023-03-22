import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMTCCComponent } from './emt-cc.component';

describe('EMTCCComponent', () => {
  let component: EMTCCComponent;
  let fixture: ComponentFixture<EMTCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMTCCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMTCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
