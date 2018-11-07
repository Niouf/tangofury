import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMaestroComponent } from './modal-maestro.component';

describe('ModalMaestroComponent', () => {
  let component: ModalMaestroComponent;
  let fixture: ComponentFixture<ModalMaestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMaestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
