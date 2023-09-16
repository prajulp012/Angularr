import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliComponent } from './poli.component';

describe('PoliComponent', () => {
  let component: PoliComponent;
  let fixture: ComponentFixture<PoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliComponent]
    });
    fixture = TestBed.createComponent(PoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
