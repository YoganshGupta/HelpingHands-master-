import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindonatorComponent } from './logindonator.component';

describe('LogindonatorComponent', () => {
  let component: LogindonatorComponent;
  let fixture: ComponentFixture<LogindonatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindonatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
