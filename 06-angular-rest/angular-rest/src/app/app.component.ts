import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-rest';
  url = 'http://localhost:1337';
  usuarios = [];
  //Inyeccion de dependencias
  //Dependencias -> Servicios!
  constructor(
    private readonly _httpClient: HttpClient
  ){
  // CASI NUNCA HACER CONFIGURACIONES (CÓDIGO)
  }
  ngOnInit(): void {
      //'http://localhost:1337' + /usuario

    //CORS ->
    // http://gmail.com -> http://facebook.com
    //http://localhost:1337 -> http://localhost:4200
    const urlUsuarios = this.url + '/usuario';
    // $ -> Observable
    const respuesta = this._httpClient.get(
      urlUsuarios
    );
    usuarios$
      .subscribe(
        (usuarios : any[])=>{ //TRY
          console.log('Usuarios: ', datos)
          this.usuarios = usuarios;
        },
        (error) => {
          console.error({ //CATCH
            error: error,
            mensaje: 'Error consultando consola'

          })
        }
      )
  }
}

editar(usuario){
  console.log('Editando usuario', usuario)
}

Eliminar(usuario){
  console.log('Editando usuario', usuario)
}
