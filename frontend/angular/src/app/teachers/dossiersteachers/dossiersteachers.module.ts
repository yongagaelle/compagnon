import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DossiersteachersRoutingModule } from './dossiersteachers-routing.module';
import { DossiersteachersComponent } from './dossiersteachers.component';



@NgModule({
  declarations: [
    DossiersteachersComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatInputModule,
    DossiersteachersRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    NgbModule,
    
    // FormBuilder
    ReactiveFormsModule 
  ],
  exports:[DossiersteachersComponent],
  providers: []
})
export class DossiersteachersModule { }
