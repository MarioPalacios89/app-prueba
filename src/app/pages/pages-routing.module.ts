import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgenteAutorizadoComponent} from './agente-autorizado/agente-autorizado.component';
import {AutenticacionComponent} from './autenticacion/autenticacion.component';

const routes: Routes = [
  {
    path: 'agente',
    component: AgenteAutorizadoComponent,
  },
  {
    path: 'autenticacion',
    component: AutenticacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
