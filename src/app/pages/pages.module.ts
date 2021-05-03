import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AgenteAutorizadoComponent } from './agente-autorizado/agente-autorizado.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { Autentication2Component } from './autentication2/autentication2.component';
import { AvanzadoComponent } from './avanzado/avanzado.component';
import { DomicilioComponent } from './domicilio/domicilio.component';
import { FirmaDigitalComponent } from './firma-digital/firma-digital.component';
import { IndexComponent } from './index/index.component';
import { ListaAplicacionesComponent } from './lista-aplicaciones/lista-aplicaciones.component';
import { NuevaAplicacionComponent } from './nueva-aplicacion/nueva-aplicacion.component';
import { ValidacionFirmaComponent } from './validacion-firma/validacion-firma.component';


@NgModule({
  declarations: [
    AgenteAutorizadoComponent,
    AutenticacionComponent,
    Autentication2Component,
    AvanzadoComponent,
    DomicilioComponent,
    FirmaDigitalComponent,
    IndexComponent,
    ListaAplicacionesComponent,
    NuevaAplicacionComponent,
    ValidacionFirmaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
