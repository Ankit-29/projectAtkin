import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListingComponent } from './question-listing.component';

describe('QuestionListingComponent', () => {
  let component: QuestionListingComponent;
  let fixture: ComponentFixture<QuestionListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
