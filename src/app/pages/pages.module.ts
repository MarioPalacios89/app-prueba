import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../core/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutingModule } from './pages-routing.module';
import { FeaturesModule } from '../features/features.module';
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
    AngularMaterialModule,
    FlexLayoutModule,
    PagesRoutingModule,
    FeaturesModule
  ],
  exports: [
    ListaAplicacionesComponent
  ]
})
export class PagesModule { }
