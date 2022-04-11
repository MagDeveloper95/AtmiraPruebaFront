import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
