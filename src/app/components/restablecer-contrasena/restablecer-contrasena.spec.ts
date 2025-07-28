import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestablecerContrasena } from './restablecer-contrasena';

describe('RestablecerContrasena', () => {
  let component: RestablecerContrasena;
  let fixture: ComponentFixture<RestablecerContrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestablecerContrasena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestablecerContrasena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
