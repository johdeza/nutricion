import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewNutriologoComponent } from './components/registernewnutri/registernewnutri.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'profile', component:     ProfileComponent    },
      { path: 'nuevo-nutriologo', component: NewNutriologoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
