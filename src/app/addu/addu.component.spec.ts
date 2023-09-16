import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduComponent } from './addu.component';

describe('AdduComponent', () => {
  let component: AdduComponent;
  let fixture: ComponentFixture<AdduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdduComponent]
    });
    fixture = TestBed.createComponent(AdduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
