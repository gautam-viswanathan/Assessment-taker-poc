import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakerPocComponent } from './taker-poc.component';

describe('TakerPocComponent', () => {
  let component: TakerPocComponent;
  let fixture: ComponentFixture<TakerPocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakerPocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakerPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
