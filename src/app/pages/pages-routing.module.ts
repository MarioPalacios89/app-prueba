import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenteAutorizadoComponent } from './agente-autorizado/agente-autorizado.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { Autentication2Component } from './autentication2/autentication2.component';
import {AvanzadoComponent} from './avanzado/avanzado.component';
import {DomicilioComponent} from './domicilio/domicilio.component';
import {FirmaDigitalComponent} from './firma-digital/firma-digital.component';
import {IndexComponent} from './index/index.component';
import {NuevaAplicacionComponent} from './nueva-aplicacion/nueva-aplicacion.component';
import {ValidacionFirmaComponent} from './validacion-firma/validacion-firma.component';
import {ListaAplicacionesComponent} from './lista-aplicaciones/lista-aplicaciones.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/pages/lista',
  //   pathMatch: 'full',
  // },
  {
    path: 'agente',
    component: AgenteAutorizadoComponent,
  },
  {
    path: 'autenticacion',
    component: AutenticacionComponent,
  },
  {
    path: 'autentication2',
    component: Autentication2Component,
  },
  {
    path: 'avanzado',
    component: AvanzadoComponent,
  },
  {
    path: 'domicilio',
    component: DomicilioComponent,
  },
  {
    path: 'firma-digital',
    component: FirmaDigitalComponent,
  },
  {
    path: 'inicio',
    component: IndexComponent,
  },
  {
    path: 'lista',
    component: ListaAplicacionesComponent,
  },
  {
    path: 'nueva-aplicacion',
    component: NuevaAplicacionComponent,
  },
  {
    path: 'validacion-firma',
    component: ValidacionFirmaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
