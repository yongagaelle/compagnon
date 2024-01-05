import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
// import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AdminModule } from './admin/admin.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsRoutingModule } from './components/components-routing.module';
import { ComponentsModule } from './components/components.module';
import { StudentRegisterComponent } from './components/modals/student-register/student-register.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';
import { PagesModule } from './pages/pages.module';
import { TeachersModule } from './teachers/teachers.module';



//import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
    // StudentRegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    // NgChartsModule,
    ComponentsRoutingModule,
    ComponentsModule,
    NgbModule,
    PagesModule,
    AdminModule,
    BrowserAnimationsModule,
    TeachersModule,
    MatDatepickerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
