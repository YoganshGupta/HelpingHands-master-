import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesngoComponent } from './medicinesngo.component';

describe('MedicinesngoComponent', () => {
  let component: MedicinesngoComponent;
  let fixture: ComponentFixture<MedicinesngoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinesngoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinesngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
