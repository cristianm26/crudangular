import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';
import { ListarProyectosComponent } from './components/listar-proyectos/listar-proyectos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    CrearProyectoComponent,
    ListarProyectosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule, ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
