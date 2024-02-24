import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

/**
 * Importamos los paquetes a utilizar, en nuestro caso "ngx-socket-io" para conectar con nuestro server socket.io
 * y tambien importamos "ngx-cookie-service" ya que manejaremos data en la cookies,
 * por ultimo importamos el Servicio que creamos llamado "web-socket.service"
 */


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
