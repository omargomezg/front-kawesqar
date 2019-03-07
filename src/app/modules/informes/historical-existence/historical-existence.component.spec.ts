import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalExistenceComponent } from './historical-existence.component';

describe('HistoricalExistenceComponent', () => {
  let component: HistoricalExistenceComponent;
  let fixture: ComponentFixture<HistoricalExistenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalExistenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalExistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
