import { NgModule } from '@angular/core';


import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from '../contador/contador/contador.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent,
        
    ],
    exports:[
        HeroeComponent,
        ListadoComponent

        
        
    ],
    imports:[
        CommonModule
    ],
    providers: [

    ]
    

})

export class HeroesModule {


}