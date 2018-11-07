import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastvideosPage } from './lastvideos.page';

describe('LastvideosPage', () => {
  let component: LastvideosPage;
  let fixture: ComponentFixture<LastvideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastvideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastvideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
