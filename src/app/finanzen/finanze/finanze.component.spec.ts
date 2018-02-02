import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzeComponent } from './finanze.component';

describe('FinanzeComponent', () => {
  let component: FinanzeComponent;
  let fixture: ComponentFixture<FinanzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
