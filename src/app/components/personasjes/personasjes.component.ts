import { Personaje } from './../../models/personaje';
import { Component, OnInit, Input } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Heroe } from 'src/app/models/user.model';


@Component({
  selector: 'app-personasjes',
  templateUrl: './personasjes.component.html',
  styleUrls: ['./personasjes.component.css']
})
export class PersonasjesComponent implements OnInit {

  filterPost: string = ''
  mostrar: boolean = true;
  ocultar: boolean = true;
  heroes:any = [];
  superHeroes:Array<Heroe> = [];
  pintarHeroes = [];
  listaPersonajes : Array<Personaje> = [];
  texto:string;


  constructor(public servicio: DatosService
  ) { }

  ngOnInit() {
    // this.superHeroes = [...this._servicio.listadoHeroes()];
    // console.log(this.superHeroes);
    this.servicio.listaPersonajes()
    .subscribe((data:any) => {
      this.listaPersonajes = data.results;

    });
  }

}
