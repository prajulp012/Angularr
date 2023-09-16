import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeoffComponent } from './homeoff.component';

describe('HomeoffComponent', () => {
  let component: HomeoffComponent;
  let fixture: ComponentFixture<HomeoffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeoffComponent]
    });
    fixture = TestBed.createComponent(HomeoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
