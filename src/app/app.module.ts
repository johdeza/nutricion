import { NutriologosService } from './services/nutriologos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from './panel/panel.module';
import { PortalComponent } from './portal/portal.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    SharedmoduleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NutriologosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
