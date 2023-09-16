import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoffComponent } from './addoff.component';

describe('AddoffComponent', () => {
  let component: AddoffComponent;
  let fixture: ComponentFixture<AddoffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddoffComponent]
    });
    fixture = TestBed.createComponent(AddoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
