import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { StudentAddComponent, StudentsComponent } from './students/students.component';
// import { StudentsComponent } from './students/students.component';
import { RouterModule } from '@angular/router';
// import { VisualisationELeveComponent } from './visualisation-eleve/visualisation-eleve.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { PagesRoutingModule } from './pages-routing.module';
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentRegisterComponent } from '../components/modals/student-register/student-register.component';
import { MatStepperModule } from '@angular/material/stepper';
import { AccueilComponent } from './accueil/accueil.component';



@NgModule({
  declarations: [
    InscriptionsComponent,
    StudentsComponent,
    StudentAddComponent,
    AccueilComponent,
    // StudentRegisterComponent
    // VisualisationELeveComponent,
    // StudentViewComponent,


  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    PagesRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatStepperModule

  ],
  exports: [
    MatInputModule,
  ]
})
export class PagesModule { }
