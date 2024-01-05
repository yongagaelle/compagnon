import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { DossiersteachersComponent } from './dossiersteachers/dossiersteachers.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'dossiers',
    pathMatch:'full'
  },
  {
    path: 'dossiers',
    component: TeachersComponent,
    //loadChildren: () => import('./dossiersteachers/dossiersteachers.module').then(m => m.DossiersteachersModule)
    children: [
      {path: '', component: DossiersteachersComponent}
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
