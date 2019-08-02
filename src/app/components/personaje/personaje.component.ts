import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { Heroe } from 'src/app/models/user.model';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {


  personaje: Personaje = {};

  pathImg: string = '../assets/img/';
  imgCasa: any;
  id: string;
  listaPersonajes : Array<Personaje> = [];
  loader = true;


  constructor(
    private activatedRoute: ActivatedRoute,
    private personajeService: DatosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute
    .params
    .subscribe(parametro =>{
      this.id = parametro.id;

      console.log( this.id);

      })

      this.personajeService.consultaPersonaje(this.id)
        .subscribe((data:any) => {
          this.personaje = data;
          this.loader= false;
    });
  }

  irAtras(){
    this.router.navigate(['/personajes']);
  }
}
