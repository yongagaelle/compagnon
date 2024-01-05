import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '#', title: 'Tableau de bord',  icon: 'design_app', class: '' },
  { path: '/teachers/dossiers', title: 'Dossiers',  icon: 'design_app', class: '' },
  { path: '/absences', title: 'Absences ',  icon:'education_atom', class: '' },
  { path: '/maps', title: 'Calendrier Scolaire',  icon:'location_map-big', class: '' },
  { path: '/Projetspedagogique', title: 'Projets pedagogiques',  icon:'ui-1_bell-53', class: '' },

  { path: '/user-profile', title: 'Prevision inscription',  icon:'users_single-02', class: '' },
  { path: '/table-list', title: 'Evenements',  icon:'design_bullet-list-67', class: '' },
  { path: '/typography', title: 'Comptes',  icon:'text_caps-small', class: '' },
 // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];
@Component({
  selector: 'app-sidebarenseignant',
  templateUrl: './sidebarenseignant.component.html',
  styleUrls: ['./sidebarenseignant.component.scss']
})
export class SidebarenseignantComponent implements OnInit {

  
  menuItems: any[]=[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

}
