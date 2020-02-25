import { Injectable } from '@angular/core';
import { PrincipalHttpService } from '../http-principal/principal-http.service';
import { Ticket } from 'src/app/dto/Ticket';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JuegoHttpService extends PrincipalHttpService<Ticket> {

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url, '/Juego')
   }
}
