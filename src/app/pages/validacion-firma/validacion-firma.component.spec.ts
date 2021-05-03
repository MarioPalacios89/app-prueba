import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionFirmaComponent } from './validacion-firma.component';

describe('ValidacionFirmaComponent', () => {
  let component: ValidacionFirmaComponent;
  let fixture: ComponentFixture<ValidacionFirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacionFirmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
