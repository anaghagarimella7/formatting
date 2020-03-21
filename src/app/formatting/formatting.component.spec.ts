import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattingComponent } from './formatting.component';

describe('FormattingComponent', () => {
  let component: FormattingComponent;
  let fixture: ComponentFixture<FormattingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormattingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
