import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPublicaciones } from './lista-publicaciones';

describe('ListaPublicaciones', () => {
  let component: ListaPublicaciones;
  let fixture: ComponentFixture<ListaPublicaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPublicaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPublicaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
