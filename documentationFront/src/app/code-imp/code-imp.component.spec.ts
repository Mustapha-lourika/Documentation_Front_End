import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeImpComponent } from './code-imp.component';

describe('CodeImpComponent', () => {
  let component: CodeImpComponent;
  let fixture: ComponentFixture<CodeImpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeImpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
