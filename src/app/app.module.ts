import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DefenceComponent } from './defence/defence.component';
import { AgentComponent } from './agent/agent.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DefenceComponent,
    AgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
