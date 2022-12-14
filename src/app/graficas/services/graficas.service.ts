import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private _http: HttpClient) { }

  getUsuariosNetwork(){
    return this._http.get('http://localhost:3000/grafica');
  }
}
