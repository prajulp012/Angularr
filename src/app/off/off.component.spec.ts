import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffComponent } from './off.component';

describe('OffComponent', () => {
  let component: OffComponent;
  let fixture: ComponentFixture<OffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffComponent]
    });
    fixture = TestBed.createComponent(OffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
