import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesServicio } from './detalles-servicio';

describe('DetallesServicio', () => {
  let component: DetallesServicio;
  let fixture: ComponentFixture<DetallesServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesServicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesServicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
