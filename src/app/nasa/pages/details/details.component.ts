import { Component, OnInit } from '@angular/core';
import { NasaResponse } from '../../interfaces/nasa.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  photo: NasaResponse = history.state.photo;
    
  constructor() { }
  
  ngOnInit(): void {
    if(!this.photo) history.back();
  }
}
