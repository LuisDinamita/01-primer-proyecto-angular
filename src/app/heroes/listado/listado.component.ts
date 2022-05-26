import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
/* Una clase que implementa la interfaz OnInit. */
export class ListadoComponent {

  heroes: string[] = [
    'Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla', 'Spiderman'
  ];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}