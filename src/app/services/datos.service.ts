import { Personaje } from './../models/personaje';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Heroe } from '../models/user.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DatoSeviceService } from './dato-sevice.service';



@Injectable({
  providedIn: 'root'
})
export class DatosService {

  URL = 'https://rickandmortyapi.com/api/';
  urlSingle = 'https://rickandmortyapi.com/api/character/';
  datos: any = {};


  constructor(private httpClient: HttpClient,
    public servicio: DatoSeviceService
  ) { }

  consultaPersonaje(id: any) {
    return this.httpClient.get(`${this.URL}character/${id}`);
  }

  listaPersonajes() {
    return this.httpClient.get(`${this.URL}character`);
  }
}



