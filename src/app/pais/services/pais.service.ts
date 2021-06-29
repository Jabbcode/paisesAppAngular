import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
/* import { catchError } from 'rxjs/operators'; */

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  buscarPais( pais: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ pais }`;
    return this.http.get<Country[]>( url );
  }

  buscarCapital( capital: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ capital }`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }
}
