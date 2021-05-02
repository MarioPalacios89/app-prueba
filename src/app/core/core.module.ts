import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RecaptchaModule } from "ng-recaptcha";
import {AngularMaterialModule} from './angular-material/angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    RecaptchaModule
  ],
  exports: [
    FlexLayoutModule,
    RecaptchaModule
  ]
})
export class CoreModule { }
