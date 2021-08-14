import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoClasesComponent } from './components/listado-clases/listado-clases.component';
import { DetalleClaseComponent } from './components/detalle-clase/detalle-clase.component';
import { MiniaturaClaseComponent } from './components/miniatura-clase/miniatura-clase.component';
import { ListadoInstructoresComponent } from './components/listado-instructores/listado-instructores.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListadoClasesComponent,
    DetalleClaseComponent,
    MiniaturaClaseComponent,
    ListadoInstructoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
