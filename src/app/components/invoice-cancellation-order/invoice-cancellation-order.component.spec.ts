import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceCancellationOrderComponent } from './invoice-cancellation-order.component';

describe('InvoiceCancellationOrderComponent', () => {
  let component: InvoiceCancellationOrderComponent;
  let fixture: ComponentFixture<InvoiceCancellationOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceCancellationOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceCancellationOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
