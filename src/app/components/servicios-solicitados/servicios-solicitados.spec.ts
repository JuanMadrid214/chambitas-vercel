import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSolicitados } from './servicios-solicitados';

describe('ServiciosSolicitados', () => {
  let component: ServiciosSolicitados;
  let fixture: ComponentFixture<ServiciosSolicitados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosSolicitados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosSolicitados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
