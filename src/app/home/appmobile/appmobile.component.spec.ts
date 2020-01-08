import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmobileComponent } from './appmobile.component';

describe('AppmobileComponent', () => {
  let component: AppmobileComponent;
  let fixture: ComponentFixture<AppmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
