import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingenComponent } from './logingen.component';

describe('LogingenComponent', () => {
  let component: LogingenComponent;
  let fixture: ComponentFixture<LogingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
