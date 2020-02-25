import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/dto/Ticket';
import { ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { JuegoHttpService } from 'src/app/services/book-http/book-http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  tickets : Ticket[]
  searchText = ''
  authorId = 0

  constructor(public actionSheetController: ActionSheetController,
    private readonly _router : Router,
    private readonly _session : SessionService,
    private readonly _juegoHttp : JuegoHttpService,
    private readonly _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    var param$ = this._activatedRoute.queryParams
    param$.subscribe(
      (parametros) =>{
        this.authorId = parametros.idAutor
      }
    )
    this.tickets = this._session.tickets.filter(item => {
      return item['author_FK'].id == this.authorId
    })
  }

  async presentActionSheet(index) {
    const actionSheet = await this.actionSheetController.create({
      header: `${this.tickets[index].name}`,
      buttons: [{
        text: 'Borrar',
        icon: 'trash',
        handler: () => {
          this.delete(index)
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  async delete(index){
    var id = this.tickets[index].id
    await this._juegoHttp.borrar(id).toPromise()
    var currentIndex = this._session.tickets.indexOf(this.tickets[index])
    this._session.tickets.splice(currentIndex, 1)
    this.tickets = this._session.tickets.filter(item => {
      return item['author_FK'].id == this.authorId
    })
  }


  search(event){
    this.searchText = event.detail.value
  }

  goToNewBook(){
    var parametros = {
      queryParams:{
        'idAutor': this.authorId
      }
    }
    this._router.navigate(['/new-juego'],parametros)
  }

}
