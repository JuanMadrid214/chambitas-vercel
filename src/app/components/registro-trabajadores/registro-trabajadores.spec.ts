import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTrabajadores } from './registro-trabajadores';

describe('RegistroTrabajadores', () => {
  let component: RegistroTrabajadores;
  let fixture: ComponentFixture<RegistroTrabajadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTrabajadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTrabajadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
