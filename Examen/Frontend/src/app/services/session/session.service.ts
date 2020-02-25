import { Injectable } from '@angular/core';
import { Author } from 'src/app/dto/Author';
import { AuthorHttpService } from '../author-http/author-http.service';
import { JuegoHttpService } from '../book-http/book-http.service';
import { BillHttpService } from '../bill-http/bill-http.service';
import { Ticket } from 'src/app/dto/Ticket';
import { Bill } from 'src/app/dto/Bill';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  authors : Author[] = []
  tickets : Ticket[] = []
  bills : Bill[] = []
    // juegos: any;

  constructor(private readonly _authorHttp : AuthorHttpService,
    private readonly _juegosHttp : JuegoHttpService,
    private readonly _billHttp : BillHttpService) { }

  async chargeData(){
    try {
      this.authors = await this._authorHttp.buscarTodos().toPromise()
      this.tickets = await this._juegosHttp.buscarTodos().toPromise()
      this.bills = await this._billHttp.buscarTodos().toPromise()
    }catch(error){
      console.log('Something went wrong')
    }
  }

}
