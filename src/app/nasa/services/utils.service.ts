import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private _listDays: String[] = [];

  getDaysPeriod() {
    const now = new Date();
    const length = 6;
    Array.from({ length }, (_, days) => {
      let day = new Date(now) 
      day.setDate(now.getDate() - days) 
      this._listDays.push(formatDate(day, 'yyyy-MM-dd', 'en')); 
    });
  } 
  
  get formatedDates() {
    this.getDaysPeriod();
    const firstDay = this._listDays[0];
    const lastDay = this._listDays[this._listDays.length - 1];
    const result = {firstDay, lastDay};
    return result;
  }


}
