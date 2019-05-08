import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginngoComponent } from './loginngo.component';

describe('LoginngoComponent', () => {
  let component: LoginngoComponent;
  let fixture: ComponentFixture<LoginngoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginngoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
