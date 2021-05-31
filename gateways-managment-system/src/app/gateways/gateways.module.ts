import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewaysComponent } from './gateways.component';
import { GatewaysRoutingModule } from './gateways.routing.module';



@NgModule({
  declarations: [
    GatewaysComponent
  ],
  imports: [
    CommonModule,
    GatewaysRoutingModule
  ]
})
export class GatewaysModule { }
