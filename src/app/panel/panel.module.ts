import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewNutriologoComponent } from './components/registernewnutri/registernewnutri.component';

import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanelComponent,
    DashboardComponent,
    ProfileComponent,
    NewNutriologoComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    SharedmoduleModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PanelModule { }
