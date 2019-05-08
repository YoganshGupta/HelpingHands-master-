import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupgenComponent } from './signupgen.component';

describe('SignupgenComponent', () => {
  let component: SignupgenComponent;
  let fixture: ComponentFixture<SignupgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
