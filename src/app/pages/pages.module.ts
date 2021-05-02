import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AgenteAutorizadoComponent } from './agente-autorizado/agente-autorizado.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';


@NgModule({
  declarations: [
    AgenteAutorizadoComponent,
    AutenticacionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
