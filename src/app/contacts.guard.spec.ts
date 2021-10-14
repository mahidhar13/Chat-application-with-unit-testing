import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { ContactsGuard } from './contacts.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './error/error.component';
import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages/messages.component';
import { messageReducer } from './store/messages.reducer';
import { messageListReducer } from './store/messagesList.reducer';

describe('ContactsGuard', () => {
  let guard: ContactsGuard;
  let routerTesting: RouterTestingModule;
  let messagesService: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({chats: messageReducer, enteredMessages: messageListReducer}),
      RouterTestingModule.withRoutes(  [
      { path: 'contacts', component: ContactsComponent, resolve: { messages: ContactsGuard } },
      { path: 'messages/:id', component: MessagesComponent },
      ]), HttpClientTestingModule],
      providers: [MessagesService]
    });
    guard = TestBed.inject(ContactsGuard);
    routerTesting = TestBed.inject(RouterTestingModule);
    messagesService = TestBed.inject(MessagesService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
