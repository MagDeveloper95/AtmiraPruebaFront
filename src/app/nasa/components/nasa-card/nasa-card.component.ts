import { Component, Input } from '@angular/core';
import { NasaResponse } from '../../interfaces/nasa.interface';

@Component({
  selector: 'app-nasa-card',
  templateUrl: './nasa-card.component.html',
  styleUrls: ['./nasa-card.component.css']
})
export class NasaCardComponent  {

  @Input('photo') photo!: NasaResponse;
  
  constructor() { }

}
