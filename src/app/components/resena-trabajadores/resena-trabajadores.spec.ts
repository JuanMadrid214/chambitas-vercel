import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaTrabajadores } from './resena-trabajadores';

describe('ResenaTrabajadores', () => {
  let component: ResenaTrabajadores;
  let fixture: ComponentFixture<ResenaTrabajadores>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResenaTrabajadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResenaTrabajadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
