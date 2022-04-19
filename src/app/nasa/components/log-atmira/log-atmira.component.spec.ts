import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogAtmiraComponent } from './log-atmira.component';

describe('LogAtmiraComponent', () => {
  let component: LogAtmiraComponent;
  let fixture: ComponentFixture<LogAtmiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogAtmiraComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAtmiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain('/img/logo-atmira-280pxabajo.png');
  });

});
