import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DossiersteachersComponent } from './dossiersteachers.component';


const routes: Routes = [
  { path: '',
    component: DossiersteachersComponent,
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
export class DossiersteachersRoutingModule { }
