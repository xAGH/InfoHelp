import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BotonMenuComponent } from './components/boton-menu/boton-menu.component';
import { InputNoticiasComponent } from './components/input-noticias/input-noticias.component';
import { NumerosDesastreComponent } from './components/numeros-desastre/numeros-desastre.component';
import { SeleccionPaisComponent } from './components/seleccion-pais/seleccion-pais.component';
import { InstructionsComponent } from './components/instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BotonMenuComponent,
    InputNoticiasComponent,
    NumerosDesastreComponent,
    SeleccionPaisComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
