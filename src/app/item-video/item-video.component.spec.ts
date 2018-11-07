import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVideoComponent } from './item-video.component';

describe('ItemVideoComponent', () => {
  let component: ItemVideoComponent;
  let fixture: ComponentFixture<ItemVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
