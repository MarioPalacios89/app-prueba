import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autentication2Component } from './autentication2.component';

describe('Autentication2Component', () => {
  let component: Autentication2Component;
  let fixture: ComponentFixture<Autentication2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Autentication2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Autentication2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
