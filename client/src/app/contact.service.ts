import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  getContacts() {
    return this.http.get('api/contacts').map(res => res.json());
  }

  addContact(newContact) {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('api/contact',newContact,{headers:headers}).map(res=>res.json());
  }
  deleteContact(id) {
    return this.http.delete('api/contact/'+id).map(res=>res.json());

  }
}
