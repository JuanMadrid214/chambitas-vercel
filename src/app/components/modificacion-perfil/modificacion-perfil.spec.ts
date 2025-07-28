import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionPerfil } from './modificacion-perfil';

describe('ModificacionPerfil', () => {
  let component: ModificacionPerfil;
  let fixture: ComponentFixture<ModificacionPerfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificacionPerfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionPerfil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
