import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailsComponent } from './details.component';
import { NasaResponse } from '../../interfaces/nasa.interface';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('DetailsComponent should be create', () => {
    expect(component).toBeTruthy();
  });
  it('DetailsComponent should render app-nasa-information', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-nasa-information')).toBeTruthy();
  });
  it('DetailsComponent should send data to app-nasa-information', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-nasa-information').dataset.photo).toBe(component.photo);
  });     

});
