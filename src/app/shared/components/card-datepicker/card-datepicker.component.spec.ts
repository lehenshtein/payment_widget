import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDatepickerComponent } from './card-datepicker.component';

describe('CardDatepickerComponent', () => {
  let component: CardDatepickerComponent;
  let fixture: ComponentFixture<CardDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
