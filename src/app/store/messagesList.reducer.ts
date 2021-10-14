import { createReducer, on } from '@ngrx/store';
import { EnteredMessage } from '../messages';
import { setMessages } from './messages.action';

const initialState: EnteredMessage[] = [];

const _messageListReducer = createReducer(
  initialState,

  on(setMessages, (state, payload) => {
    console.log('Reducer for new messages', state, payload.enteredMessages);
    return [...state, ...payload.enteredMessages];
  })
);

export function messageListReducer(state:any, action:any) {
  return _messageListReducer(state, action);
}
