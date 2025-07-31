import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpleadores } from './lista-empleadores';

describe('ListaEmpleadores', () => {
  let component: ListaEmpleadores;
  let fixture: ComponentFixture<ListaEmpleadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEmpleadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEmpleadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
