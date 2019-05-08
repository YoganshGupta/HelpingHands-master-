import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinheaderdonatorComponent } from './loggedinheaderdonator.component';

describe('LoggedinheaderdonatorComponent', () => {
  let component: LoggedinheaderdonatorComponent;
  let fixture: ComponentFixture<LoggedinheaderdonatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinheaderdonatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinheaderdonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
