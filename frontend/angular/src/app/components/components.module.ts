import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComponentsRoutes } from './components-routing.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentRegisterComponent } from './modals/student-register/student-register.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TeachersAddComponent } from './modals/teachers-add/teachers-add.component';
import { SidebarenseignantComponent } from './sidebarenseignant/sidebarenseignant.component';




@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    StudentRegisterComponent,
    TeachersAddComponent,
    SidebarenseignantComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(ComponentsRoutes),
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    StudentRegisterComponent,
    TeachersAddComponent,
    SidebarenseignantComponent
  ]
})
export class ComponentsModule { }
