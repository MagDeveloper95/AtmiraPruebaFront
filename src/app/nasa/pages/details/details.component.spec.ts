import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailsComponent } from './details.component';
import { NasaResponse } from '../../interfaces/nasa.interface';

let photo: NasaResponse = {
  date: '2022-04-14',
  explanation: '',
  hdurl: '',
  media_type: '',
  service_version: '',
  title: '',
  url: '',
};

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
  it('During ngOnInit photo is equals to history state  ', () => {
    component.photo = photo;
    history.pushState(photo, '', '');
    fixture.detectChanges();
    component.ngOnInit();
    expect(history.state).toEqual(photo);    
  });       

});
