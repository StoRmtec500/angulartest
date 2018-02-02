import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FinanzeService {

  constructor(private httpClient: HttpClient) {
  }

  account = null;

  getAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>('https://jsonplaceholder.typicode.com/photos');
}

}
