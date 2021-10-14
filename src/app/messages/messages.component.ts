import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EnteredMessage, Messages } from '../messages';
import { setMessages } from '../store/messages.action';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  id: any;
  sendMessagesForm: any;
  urlMessages: any = [];
  newStoreMessage: any = [];
  newMessages: any;
  constructor(private activatedRoute: ActivatedRoute, private store: Store<{ enteredMessages: EnteredMessage; chats: Messages }>) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.sendMessagesForm = new FormGroup({
      messageInput: new FormControl()
    });

    this.store.select('chats').subscribe(data => {
      console.log('All messages receiving from Store', data);
      this.urlMessages = data;
    });

    this.store.select('enteredMessages').subscribe(data => {
      console.log('Entered messages receiving from Store to messages component', data);
      this.newStoreMessage = data;
      console.log('new store message', this.newStoreMessage);
    });
  }
  sendMessage() {
    let enteredMessage = {
      id: this.id,
      content: this.sendMessagesForm.value.messageInput
    };
    this.newMessages = Object.assign([], enteredMessage);
    this.newMessages.push(enteredMessage);
    console.log('Entered messages dispatching to store', this.newMessages);
    this.store.dispatch(setMessages({ enteredMessages: this.newMessages }));
    this.sendMessagesForm.reset();
  }
}
