import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Messages } from './messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  url = 'https://raw.githubusercontent.com/NablaT/test-api/master/assets/messages.json.txt';

  constructor(private http: HttpClient) { }

  getContacts(){
    return this.http.get<Messages[]>(this.url);
  }

}
