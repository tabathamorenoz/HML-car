import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekStatusComponent } from './weekstatus.component';

describe('WeekStatusComponent', () => {
  let component: WeekStatusComponent;
  let fixture: ComponentFixture<WeekStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
