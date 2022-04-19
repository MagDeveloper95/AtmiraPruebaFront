import { Component, OnInit } from '@angular/core';
import { NasaResponse } from '../../interfaces/nasa.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  photo!: NasaResponse | undefined;;

  constructor(private routerNav: Router) {}

  ngOnInit(): void {
    (history.state && history.state.title)? this.photo = history.state  : this.photo == undefined;
    if(!this.photo) this.routerNav.navigate(['/']);
  }
  
}
