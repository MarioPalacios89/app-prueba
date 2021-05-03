import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAplicacionComponent } from './nueva-aplicacion.component';

describe('NuevaAplicacionComponent', () => {
  let component: NuevaAplicacionComponent;
  let fixture: ComponentFixture<NuevaAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaAplicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
