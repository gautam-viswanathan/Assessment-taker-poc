import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AssessmentTakerComponent } from './assessment-taker/assessment-taker.component';
import { TakerPocComponent } from './taker-poc.component';

@NgModule({
  declarations: [
    AssessmentTakerComponent,
    TakerPocComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TakerPocComponent,
    AssessmentTakerComponent
  ]
})
export class TakerPocModule { }
