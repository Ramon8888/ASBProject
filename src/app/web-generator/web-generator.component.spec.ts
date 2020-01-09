import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGeneratorComponent } from './web-generator.component';

describe('WebGeneratorComponent', () => {
  let component: WebGeneratorComponent;
  let fixture: ComponentFixture<WebGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
