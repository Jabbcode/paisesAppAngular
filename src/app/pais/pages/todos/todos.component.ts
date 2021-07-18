import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { 
    this.paisService.Paises( )
      .subscribe( ( paises ) => {
        console.log( paises )

        this.paises = paises;
        
      }, ( err) => {
        console.log( err );
        console.info( err );
        this.hayError = true;
        this.paises = [];
      });
  }

}
