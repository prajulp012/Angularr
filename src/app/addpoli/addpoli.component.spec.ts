import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpoliComponent } from './addpoli.component';

describe('AddpoliComponent', () => {
  let component: AddpoliComponent;
  let fixture: ComponentFixture<AddpoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpoliComponent]
    });
    fixture = TestBed.createComponent(AddpoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
