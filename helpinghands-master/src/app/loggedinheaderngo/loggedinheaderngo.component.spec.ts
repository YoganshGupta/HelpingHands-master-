import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinheaderngoComponent } from './loggedinheaderngo.component';

describe('LoggedinheaderngoComponent', () => {
  let component: LoggedinheaderngoComponent;
  let fixture: ComponentFixture<LoggedinheaderngoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinheaderngoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinheaderngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
