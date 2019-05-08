import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesngoComponent } from './clothesngo.component';

describe('ClothesngoComponent', () => {
  let component: ClothesngoComponent;
  let fixture: ComponentFixture<ClothesngoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesngoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
