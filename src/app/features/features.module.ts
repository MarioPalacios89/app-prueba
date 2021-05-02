import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from '../core/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeaturesRoutingModule } from './features-routing.module';
@NgModule({
  declarations: [SidebarComponent, MainComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    LayoutModule,
    AngularMaterialModule,
    RouterModule,
  ],
  exports: [SidebarComponent],
})
export class FeaturesModule {}
