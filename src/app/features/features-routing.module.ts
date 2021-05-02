import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesModule } from '../pages/pages.module';
const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () =>
      import('./../pages/pages.module').then((m) => m.PagesModule),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
