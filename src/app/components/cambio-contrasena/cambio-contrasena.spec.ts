import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioContrasena } from './cambio-contrasena';

describe('CambioContrasena', () => {
  let component: CambioContrasena;
  let fixture: ComponentFixture<CambioContrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambioContrasena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioContrasena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
