import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllselectionsPage } from './allselections.page';

describe('AllselectionsPage', () => {
  let component: AllselectionsPage;
  let fixture: ComponentFixture<AllselectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllselectionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllselectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
