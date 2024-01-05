import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSchoolComponent } from './admin/add-school/add-school.component';
import { StudentRegisterComponent } from './components/modals/student-register/student-register.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentViewComponent } from './pages/student-view/student-view.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './teachers/teachers.component';


const routes: Routes = [
    {
      path:'',
      redirectTo:'Accueil',
      pathMatch:'full'
    },
    { path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule)},

     { path: 'login', component: LoginComponent },
     { path: 'Accueil', component: AccueilComponent },
     //{ path: 'teachers', component: TeachersComponent },
     //{ path: 'dossiers', component: DossiersteachersComponent},


      // { path: '', component: InscriptionsComponent,
      { path: 'inscription', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
     },


]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
