import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRegistro } from './tipo-registro';

describe('TipoRegistro', () => {
  let component: TipoRegistro;
  let fixture: ComponentFixture<TipoRegistro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoRegistro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoRegistro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
