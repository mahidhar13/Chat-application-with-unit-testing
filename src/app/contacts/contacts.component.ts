import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Messages } from '../messages';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts$: any = [];
  messages: any[] = [];
  constructor(private store: Store<{chats: Messages}>) { }

  ngOnInit(): void {
    this.contacts$ = this.store.select('chats');
  }
}
