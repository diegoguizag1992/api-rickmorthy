import { Component, OnInit, Input } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Heroe } from 'src/app/models/user.model';
import { Personaje } from 'src/app/models/personaje';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // superHeroes:any = [];
  @Input() personaje: Personaje = {};
  @Input() id: number;
  superHeroes: Array<Heroe> = [];
  pintarHeroes = [];
  listaPersonajes: Array<Personaje> = [];
  texto: string;

  constructor( public servicio: DatosService ) { }

  ngOnInit() {
    // console.log(this.superHeroes);
    // this.servicio.listaPersonajes()
    // .subscribe((data:any) => {
    //   this.listaPersonajes = data.results;
    //   console.log(this.listaPersonajes);
    //console.log( this.personaje);

    // });
  }
}


