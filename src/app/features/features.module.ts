import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../core/angular-material/angular-material.module';
import { FeaturesRoutingModule } from './features-routing.module';


import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [SidebarComponent, MainComponent, HeaderComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FeaturesRoutingModule,
    LayoutModule,
    AngularMaterialModule,
    RouterModule,
  ],
  exports: [SidebarComponent,HeaderComponent,MainComponent],
})
export class FeaturesModule {}
