import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPlaylistEditComponent } from './modal-playlist-edit.component';

describe('ModalPlaylistEditComponent', () => {
  let component: ModalPlaylistEditComponent;
  let fixture: ComponentFixture<ModalPlaylistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPlaylistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPlaylistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
