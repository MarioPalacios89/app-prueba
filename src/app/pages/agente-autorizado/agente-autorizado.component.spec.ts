import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteAutorizadoComponent } from './agente-autorizado.component';

describe('AgenteAutorizadoComponent', () => {
  let component: AgenteAutorizadoComponent;
  let fixture: ComponentFixture<AgenteAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenteAutorizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenteAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
