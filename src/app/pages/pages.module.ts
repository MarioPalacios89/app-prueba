import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AgenteAutorizadoComponent } from './agente-autorizado/agente-autorizado.component';


@NgModule({
  declarations: [
    AgenteAutorizadoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
