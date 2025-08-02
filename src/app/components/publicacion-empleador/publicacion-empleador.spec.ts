import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionEmpleador } from './publicacion-empleador';

describe('PublicacionEmpleador', () => {
  let component: PublicacionEmpleador;
  let fixture: ComponentFixture<PublicacionEmpleador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionEmpleador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionEmpleador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
