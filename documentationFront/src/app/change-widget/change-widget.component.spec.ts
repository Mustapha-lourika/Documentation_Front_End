import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeWidgetComponent } from './change-widget.component';

describe('ChangeWidgetComponent', () => {
  let component: ChangeWidgetComponent;
  let fixture: ComponentFixture<ChangeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
