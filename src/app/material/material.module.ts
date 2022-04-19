import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule { }
