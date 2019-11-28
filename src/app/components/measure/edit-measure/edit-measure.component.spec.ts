import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeasureComponent } from './edit-measure.component';

describe('EditMeasureComponent', () => {
  let component: EditMeasureComponent;
  let fixture: ComponentFixture<EditMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
