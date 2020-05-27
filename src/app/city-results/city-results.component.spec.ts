import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityResultsComponent } from './city-results.component';

describe('CityResultsComponent', () => {
  let component: CityResultsComponent;
  let fixture: ComponentFixture<CityResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
