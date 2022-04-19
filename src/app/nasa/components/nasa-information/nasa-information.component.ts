import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NasaResponse } from '../../interfaces/nasa.interface';


@Component({
  selector: 'app-nasa-information',
  templateUrl: './nasa-information.component.html',
  styleUrls: ['./nasa-information.component.css']
})
export class NasaInformationComponent implements OnInit {

  @Input('photo')photo!: NasaResponse;
    
  constructor(private routerNav: Router) { }

  ngOnInit(): void {    
    if(!this.photo) this.routerNav.navigate(['/']);
  }

}
