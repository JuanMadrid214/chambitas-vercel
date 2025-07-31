import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajadores } from './lista-trabajadores';

describe('ListaTrabajadores', () => {
  let component: ListaTrabajadores;
  let fixture: ComponentFixture<ListaTrabajadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTrabajadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTrabajadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
