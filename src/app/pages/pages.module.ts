import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../core/angular-material/angular-material.module';

import { PagesRoutingModule } from './pages-routing.module';
import { FeaturesModule } from '../features/features.module';
import { AgenteAutorizadoComponent } from './agente-autorizado/agente-autorizado.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { ListaAplicacionesComponent } from './lista-aplicaciones/lista-aplicaciones.component';


@NgModule({
  declarations: [
    AgenteAutorizadoComponent,
    AutenticacionComponent,
    ListaAplicacionesComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PagesRoutingModule,
    FeaturesModule
  ],
  exports: [
    ListaAplicacionesComponent
  ]
})
export class PagesModule { }
