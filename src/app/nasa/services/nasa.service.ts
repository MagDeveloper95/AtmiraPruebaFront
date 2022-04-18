import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NasaResponse } from '../interfaces/nasa.interface';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private _apiKey = environment.nasa.nasaApiKey;
  private _baseUrl = `${environment.nasa.baseUrl}?api_key=${this._apiKey}`;

  constructor(private httpC :HttpClient, private utilsS: UtilsService ) { }

  getPhotos(): Observable<NasaResponse[]>{
    const startDate = this.utilsS.formatedDates.firstDay;
    const endDate = this.utilsS.formatedDates.lastDay;
    return this.httpC.get<NasaResponse[]>(`${this._baseUrl}&start_date=${endDate}&end_date=${startDate}`);
  }
}
