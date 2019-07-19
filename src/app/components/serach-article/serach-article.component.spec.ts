import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachArticleComponent } from './serach-article.component';

describe('SerachArticleComponent', () => {
  let component: SerachArticleComponent;
  let fixture: ComponentFixture<SerachArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
