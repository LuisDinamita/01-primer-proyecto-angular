import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    nombre: String = 'Aquaman';
    edad: number = 500;

    get nombreCapitalizado () :string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre (){
        this.nombre = "Superman";
        

    }
    
    cambiarEdad (){
        this.edad = 100;
    }

    
    obtenerNombre ():string {
        return `${this.nombre} - ${this.edad}`

    }
    
}