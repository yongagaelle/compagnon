import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddSchoolComponent } from '../admin/add-school/add-school.component';
import { StudentsComponent } from './students/students.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';


const routes: Routes = [
  { path: 'inscription', component: InscriptionsComponent ,
    children:[
      { path: 'students', component: StudentsComponent },
      { path: 'view', component: StudentViewComponent }
    ]
},
  // { path: 'Accueil', component: AccueilComponent },
  // { path: 'conf', component: AddSchoolComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
