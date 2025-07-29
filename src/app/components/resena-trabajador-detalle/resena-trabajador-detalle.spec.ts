import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaTrabajadorDetalle } from './resena-trabajador-detalle';

describe('ResenaTrabajadorDetalle', () => {
  let component: ResenaTrabajadorDetalle;
  let fixture: ComponentFixture<ResenaTrabajadorDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResenaTrabajadorDetalle]
    })
    .compileComponents(); 

    fixture = TestBed.createComponent(ResenaTrabajadorDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
