import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintpComponent } from './complaintp.component';

describe('ComplaintpComponent', () => {
  let component: ComplaintpComponent;
  let fixture: ComponentFixture<ComplaintpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintpComponent]
    });
    fixture = TestBed.createComponent(ComplaintpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
