import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) { }

  public getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  // public getProductsFilter(category: string){
  //   this.firestore.collection('products').where()
  // }

}
