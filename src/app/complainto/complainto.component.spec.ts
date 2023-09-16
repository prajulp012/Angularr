import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintoComponent } from './complainto.component';

describe('ComplaintoComponent', () => {
  let component: ComplaintoComponent;
  let fixture: ComponentFixture<ComplaintoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintoComponent]
    });
    fixture = TestBed.createComponent(ComplaintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
