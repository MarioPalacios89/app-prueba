import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menuItems = [
    {
      icon: 'home',
      title: 'Inicio',
      route: 'pages/inicio',
    },
    {
      icon: 'settings_applications',
      title: 'Avanzado',
      route: 'pages/avanzado',
    },
  ];

  menuItemsServices = [
    {
      icon: 'verified',
      title: 'Autenticación',
      route: 'pages/autenticacion',
    },
    {
      icon: 'drive_file_rename_outline',
      title: 'Firma Digital',
      route: 'pages/firma-digital',
    },
    {
      icon: 'check',
      title: 'Validación de Firma',
      route: 'pages/validacion-firma',
    },
    {
      icon: 'perm_data_setting',
      title: 'Agente Automatizado',
      route: 'pages/agente',
    },
    {
      icon: 'home_work',
      title: 'Domicilio Digital',
      route: 'pages/domicilio',
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public router:Router) {}
}
