import { Injectable } from '@angular/core';
import {AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {MessageI} from '../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private contactCollection: AngularFirestoreCollection<MessageI>;
  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<MessageI>('Usuarios');
  }

  saveMessage(newContact: MessageI): void {
    this.contactCollection.add(newContact);

  }
}
