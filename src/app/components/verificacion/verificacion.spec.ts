import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verificacion } from './verificacion';

describe('Verificacion', () => {
  let component: Verificacion;
  let fixture: ComponentFixture<Verificacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verificacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verificacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
