import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSchoolComponent } from './add-school/add-school.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AddSchoolComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    NgbModule,
    
    // FormBuilder
    ReactiveFormsModule 
  ],
  exports: [
    AddSchoolComponent
  ]
})
export class AdminModule { }
