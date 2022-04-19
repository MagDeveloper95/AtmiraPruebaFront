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
  it('should  ', () => {
    let photo: NasaResponse = {
      date: '2022-02-02',
      explanation: '',
      hdurl: '',
      media_type: '',
      service_version: '',
      title: '',
      url: '',
    };
    component.photo = photo;
    history.pushState(photo, '', '');
    component.ngOnInit();
    //if history.state is not null, then it means that the component is loaded from the history
    expect(history.state).toBe(photo);
    
  });       

});
