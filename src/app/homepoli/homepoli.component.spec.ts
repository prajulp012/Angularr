import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepoliComponent } from './homepoli.component';

describe('HomepoliComponent', () => {
  let component: HomepoliComponent;
  let fixture: ComponentFixture<HomepoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepoliComponent]
    });
    fixture = TestBed.createComponent(HomepoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
