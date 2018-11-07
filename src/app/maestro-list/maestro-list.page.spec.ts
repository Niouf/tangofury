import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroListPage } from './maestro-list.page';

describe('MaestroListPage', () => {
  let component: MaestroListPage;
  let fixture: ComponentFixture<MaestroListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
