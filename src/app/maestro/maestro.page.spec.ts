import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroPage } from './maestro.page';

describe('MaestroPage', () => {
  let component: MaestroPage;
  let fixture: ComponentFixture<MaestroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
