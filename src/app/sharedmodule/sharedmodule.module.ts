import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedmoduleRoutingModule } from './sharedmodule-routing.module';
import { NavbarsharedComponent } from './navbarshared/navbarshared.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarsharedComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedmoduleRoutingModule
  ],
  exports: [NavbarsharedComponent,FooterComponent]
})
export class SharedmoduleModule { }
