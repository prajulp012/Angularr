import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpeditComponent } from './userpedit.component';

describe('UserpeditComponent', () => {
  let component: UserpeditComponent;
  let fixture: ComponentFixture<UserpeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserpeditComponent]
    });
    fixture = TestBed.createComponent(UserpeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
