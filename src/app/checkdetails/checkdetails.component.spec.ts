import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdetailsComponent } from './checkdetails.component';

describe('CheckdetailsComponent', () => {
  let component: CheckdetailsComponent;
  let fixture: ComponentFixture<CheckdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckdetailsComponent]
    });
    fixture = TestBed.createComponent(CheckdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
