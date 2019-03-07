import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalExistenceDetailComponent } from './historical-existence-detail.component';

describe('HistoricalExistenceDetailComponent', () => {
  let component: HistoricalExistenceDetailComponent;
  let fixture: ComponentFixture<HistoricalExistenceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalExistenceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalExistenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
