import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderWidgetComponent } from './reminder-widget.component';

describe('ReminderWidgetComponent', () => {
  let component: ReminderWidgetComponent;
  let fixture: ComponentFixture<ReminderWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
