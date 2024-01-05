import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DossiersteachersComponent } from './dossiersteachers/dossiersteachers.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeachersRoutingModule } from './teachers-routing.module';
import { DossiersteachersModule } from './dossiersteachers/dossiersteachers.module';
import { TeachersComponent } from './teachers.component';
import { ComponentsModule } from '../components/components.module';
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [
    TeachersComponent,
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    ComponentsModule,
    MatInputModule,
    MatFormFieldModule,
    DossiersteachersModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule,
    NgbModule,
    TeachersRoutingModule,
    // FormBuilder
    ReactiveFormsModule
  ],
  exports: [
  ],
})
export class TeachersModule { }
