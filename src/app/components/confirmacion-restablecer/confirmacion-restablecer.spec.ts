import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionRestablecer } from './confirmacion-restablecer';

describe('ConfirmacionRestablecer', () => {
  let component: ConfirmacionRestablecer;
  let fixture: ComponentFixture<ConfirmacionRestablecer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionRestablecer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionRestablecer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
