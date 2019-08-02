import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatoSeviceService {

  DATOS = 'https://rickandmortyapi.com/api/';


  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';

  datosPersonajes()  {
  return this.http.get(`${this.DATOS}character`);
  }
}
