import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenteAutorizadoComponent } from './agente-autorizado/agente-autorizado.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { ListaAplicacionesComponent } from './lista-aplicaciones/lista-aplicaciones.component';

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
    path: 'lista',
    component: ListaAplicacionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
