import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {


personajes : Personaje [] = [
  {
  nombre : 'Goku',
  poder :  10000
},
{
  nombre : 'Vegeta ',
  poder :  20000
},
{
  nombre : 'Picoro ',
  poder :  5000
}
]
 
nuevo : Personaje = {
  nombre: 'Krilin',
  poder: 1000
}



  agregar (){
    if (this.nuevo.nombre.trim().length === 0 ) {
    return;
    }
    //insertar perosnaje con el .push()
    //this.nuevo incilizar el objeto {nombre: '' , poder: 0}
    this.personajes.push(this.nuevo);
    this.nuevo= {
      nombre:'',
      poder: 0
    }
    
   }

  cambiarNombre (event:any){
    console.log(event);
    
  }

}
