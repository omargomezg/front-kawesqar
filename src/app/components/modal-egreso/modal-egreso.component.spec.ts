import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEgresoComponent } from './modal-egreso.component';

describe('ModalEgresoComponent', () => {
  let component: ModalEgresoComponent;
  let fixture: ComponentFixture<ModalEgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
