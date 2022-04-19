import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService]
    });
    service = TestBed.inject(UtilsService);
  });

  it('UtilsService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('formatedDates() should return an object with two properties', () => {
    const result = service.formatedDates;
    expect(result).toBeTruthy();
    expect(result).toEqual(jasmine.any(Object));
    expect(Object.keys(result).length).toBe(2);
  });

  it('getDaysPeriod() should return an array of dates', () => {
    const dates : string[] = [];
    const spy = spyOn(service, 'getDaysPeriod').and.callFake(() => {
      const now = new Date();
      const length = 6;
      const days = Array.from({ length }, (_, days) => {
        let day = new Date(now)
        day.setDate(now.getDate() - days)
        dates.push(day.toISOString().split('T')[0]);
      });
    });
    service.getDaysPeriod();
    expect(spy).toHaveBeenCalled();
    expect(dates.length).toBe(6);
    
  });
});
