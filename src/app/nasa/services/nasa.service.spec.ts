import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { NasaResponse } from '../interfaces/nasa.interface';
import { NasaService } from './nasa.service';

const photosList: NasaResponse[] = [
  {
    date: new Date(),
    explanation: 'test',
    hdurl: 'test',
    media_type: 'test',
    service_version: 'test',
    title: 'test',
    url: 'test',
  },
  {
    date: new Date(),
    explanation: 'test1',
    hdurl: 'test1',
    media_type: 'test1',
    service_version: 'test1',
    title: 'test1',
    url: 'test1',
  },
];

describe('NasaService', () => {
  let service: NasaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NasaService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(NasaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('NasaService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get private params from environment', () => {
    const fApikey = service['_apiKey'];
    expect(fApikey).toBe(environment.nasa.nasaApiKey);
    const fbaseUrl = service['_baseUrl'];
    expect(fbaseUrl).toBe(`${environment.nasa.baseUrl}?api_key=${fApikey}`);
  });

  it('getPhotos() return an observable list of photos, does a get method', () => {
    let date = new Date();
    date.setDate(date.getDate() - 5);
    const formatDate = date.toISOString().split('T')[0];

    service.getPhotos().subscribe((result) => {
      expect(result).toEqual(photosList);
      expect(result.length).toBe(2);
    });

    const req = httpMock.expectOne(
      environment.nasa.baseUrl +
        '?api_key=' +
        environment.nasa.nasaApiKey +
        '&start_date=' +
        formatDate +
        '&end_date=' +
        new Date().toISOString().split('T')[0]
    );
    expect(req.request.method).toBe('GET');
    req.flush(photosList);
  });
});
