import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { NasaResponse } from '../../interfaces/nasa.interface';
import {of} from 'rxjs';

const photosList: NasaResponse[] = [
  {
  date: new Date(),
  explanation: 'test',
  hdurl: 'test',
  media_type: 'test',
  service_version: 'test',
  title: 'test',
  url: 'test'
  },
  {
    date: new Date(),
    explanation: 'test1',
    hdurl: 'test1',
    media_type: 'test1',
    service_version: 'test1',
    title: 'test1',
    url: 'test1'
    }
];

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [NasaService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Array should be empty', () =>{
    expect(component.photosList).toHaveSize(0);
  });

  it('get photos from the subscription', () =>{
    const nasaS = fixture.debugElement.injector.get(NasaService);
    const spy = spyOn(nasaS, 'getPhotos').and.returnValue(of(photosList));
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(component.photosList.length).toBe(2);
  });
});
