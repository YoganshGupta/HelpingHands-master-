import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeryngoComponent } from './stationeryngo.component';

describe('StationeryngoComponent', () => {
  let component: StationeryngoComponent;
  let fixture: ComponentFixture<StationeryngoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationeryngoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationeryngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
