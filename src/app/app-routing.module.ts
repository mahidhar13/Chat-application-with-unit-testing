import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsGuard } from './contacts.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './error/error.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent, resolve: { messages: ContactsGuard } },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'messages/:id', component: MessagesComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
