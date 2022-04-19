import { Component, Input, OnInit } from '@angular/core';
import { NasaResponse } from '../../interfaces/nasa.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nasa-card',
  templateUrl: './nasa-card.component.html',
  styleUrls: ['./nasa-card.component.css']
})
export class NasaCardComponent implements OnInit {

  @Input('photo') photo!: NasaResponse;
  
  constructor(private routerM : Router) { }

  ngOnInit(): void {  
    if(!this.photo) this.routerM.navigate(['']); 
  }
}
