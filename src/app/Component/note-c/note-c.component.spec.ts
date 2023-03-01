import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCComponent } from './note-c.component';

describe('NoteCComponent', () => {
  let component: NoteCComponent;
  let fixture: ComponentFixture<NoteCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
