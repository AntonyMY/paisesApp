import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

//import { Observable, of } from 'rxjs';
//import { catchError } from 'rxjs/operators'; PARA OBTENER EL ERROR Y RETORNAR UN ARREGLO VACIO 

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{

    const url = `${ this.apiURL }/name/${ termino }`;
    
    return this.http.get<Country[]>( url );

    // .pipe(
    //   catchError( err => of([]))
    //   ); OBTENER EL ERROR Y RETORNAR UN ARREGLO VACIO

  }

}
