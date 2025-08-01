import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionTrabajador } from './publicacion-trabajador';

describe('PublicacionTrabajador', () => {
  let component: PublicacionTrabajador;
  let fixture: ComponentFixture<PublicacionTrabajador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionTrabajador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionTrabajador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
