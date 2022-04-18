import { Component, OnInit } from '@angular/core';
import { NasaResponse } from '../../interfaces/nasa.interface';
import { NasaService } from '../../services/nasa.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  photosList: NasaResponse [] = [];
 
  constructor(private nasaS: NasaService) {}

  ngOnInit(): void {
    this.nasaS.getPhotos().subscribe(
      (data: NasaResponse[]) => {
        console.log(this.photosList = data);
      }
    );
  }

}
