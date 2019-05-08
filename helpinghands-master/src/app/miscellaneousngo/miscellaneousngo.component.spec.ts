import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousngoComponent } from './miscellaneousngo.component';

describe('MiscellaneousngoComponent', () => {
  let component: MiscellaneousngoComponent;
  let fixture: ComponentFixture<MiscellaneousngoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousngoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
