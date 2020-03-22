import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouPageComponent } from './thank-you-page.component';

describe('ThankYouPageComponent', () => {
  let component: ThankYouPageComponent;
  let fixture: ComponentFixture<ThankYouPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
