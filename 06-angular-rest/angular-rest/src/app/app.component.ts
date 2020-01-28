import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FILAS} from './constantes/numero-filas-por-tabla';

import {ModalEditarUsuarioComponent} from "./modales/modal-editar-usuario/modal-editar-usuario.component";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
  }

}

//
//
// /Inicio -> Componente
// /login -> Componente
// /Gestion Usuarios -> Componente
//   // Gestion de Libros -> Componente
//        / Buscar libros -> Componente (id Usuario)
//        / Crear libros -> Componente (id Usuario)
//        / Editar libros  -> Componente (id Libro)









