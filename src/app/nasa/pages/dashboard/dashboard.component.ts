import { Component, OnInit } from '@angular/core';
import { NasaResponse } from '../../interfaces/nasa.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  photosList: NasaResponse[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
