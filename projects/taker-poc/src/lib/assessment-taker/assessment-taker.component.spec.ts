import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentTakerComponent } from './assessment-taker.component';

describe('AssessmentTakerComponent', () => {
  let component: AssessmentTakerComponent;
  let fixture: ComponentFixture<AssessmentTakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentTakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
