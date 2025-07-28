import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEmpleador } from './registro-empleador';

describe('RegistroEmpleador', () => {
  let component: RegistroEmpleador;
  let fixture: ComponentFixture<RegistroEmpleador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroEmpleador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroEmpleador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
