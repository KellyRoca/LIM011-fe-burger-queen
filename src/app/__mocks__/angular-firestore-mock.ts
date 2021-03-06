import { of } from 'rxjs';

export class AngularFirestoreMock {
  constructor(private data) {
    this.data = data;
  }

  snapshotChanges() {
    const actions = this.data.map(doc => {
      return {
        payload: {
          doc: {
            id: doc.id,
            data: () => doc.data
          }
        }
      };
    });
    return of(actions);
  }

  collection(nameCollection) {
    return {
      snapshotChanges: () =>  this.snapshotChanges()
    };
  }
}

