import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppComponent } from './app.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { EventosComponent } from './eventos/eventos.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
      PalestrantesComponent,
      EventosComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
