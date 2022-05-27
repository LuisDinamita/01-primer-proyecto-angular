import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.modules';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { ContadorModule } from './contador/contador/contador.modules';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
