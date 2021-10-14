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
    // this.messages = this.activatedRoute.snapshot.data.messages;
    // console.log('I m in contacts component', this.messages);
    this.contacts$ = this.store.select('chats');
  }
}
