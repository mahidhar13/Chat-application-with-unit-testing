// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Resolve,
//   Router
// } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { EMPTY, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Messages } from './messages';
// import { MessagesService } from './messages.service';
// import { retrieveMessagesSuccess } from './store/messages.action';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactsGuard implements Resolve<Messages[]> {
//   retrieveMessages: Messages[] = [];
//   constructor(
//     private messageService: MessagesService,
//     private store: Store<Messages[]>,
//     private router: Router
//   ) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
//     this.messageService
//       .getContacts()
//       .pipe(
//         catchError(error => {
//           console.log('Error occurred', error);
//           this.router.navigate(['/error']);
//           return EMPTY;
//         })
//       )
//       .subscribe(data => {
//         this.retrieveMessages = data;
//         console.log(
//           'Guard is dispatching data to store',
//           this.retrieveMessages
//         );
//         this.store.dispatch(
//           retrieveMessagesSuccess({ chats: this.retrieveMessages })
//         );
//       });
//   }
// }
