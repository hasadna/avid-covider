import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenMapComponent } from './fullscreen-map.component';

describe('FullscreenMapComponent', () => {
  let component: FullscreenMapComponent;
  let fixture: ComponentFixture<FullscreenMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullscreenMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
