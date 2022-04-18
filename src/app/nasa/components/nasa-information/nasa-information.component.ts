import { Component, Input, OnInit} from '@angular/core';
import { NasaResponse } from '../../interfaces/nasa.interface';


@Component({
  selector: 'app-nasa-information',
  templateUrl: './nasa-information.component.html',
  styleUrls: ['./nasa-information.component.css']
})
export class NasaInformationComponent implements OnInit {

  @Input('photo')photo!: any;
    
  constructor() { }
  
  ngOnInit(): void {
    console.log("aqui")
    console.log(this.photo);
  }

}
