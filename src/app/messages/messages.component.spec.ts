import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Messages } from '../messages';
import { messageReducer } from '../store/messages.reducer';
import { messageListReducer } from '../store/messagesList.reducer';
import { MessagesComponent } from './messages.component';

const initialState: Messages[] = [
  {
    "id": 7,
    "sender": {
        "name": "Almara Bemma",
        "profileImage": "https://images.pexels.com/photos/4665930/pexels-photo-4665930.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100&w=100"
    },
    "content": "On it differed repeated wandered required in. On it differed repeated wandered required in. ",
    "read": true,
    "date": "Sun Nov 15 2020 14:11:27 GMT+0100 (Central European Standard Time)"
},
{
    "id": 6,
    "sender": {
        "name": "Roya Talo",
        "profileImage": "https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg?auto=compress&cs=tinysrgb&h=100&w=100"
    },
    "content": "On it differed repeated wandered required in. On it differed repeated wandered required in. ",
    "read": true,
    "date": "Sun Nov 15 2020 14:11:27 GMT+0100 (Central European Standard Time)"
},
{
    "id": 1,
    "sender": {
        "name": "Nebory Talk",
        "profileImage": "https://images.pexels.com/photos/2801603/pexels-photo-2801603.jpeg?auto=compress&cs=tinysrgb&h=100&w=100"
    },
    "content": "On it differed repeated wandered required in. On it differed repeated wandered required in. ",
    "read": true,
    "date": "Sun Oct 11 2020 16:20:49 GMT+0200 (Central European Summer Time)"
},
{
    "id": 2,
    "sender": {
        "name": "Johnathan Fritz",
        "profileImage": "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&h=100&w=100"
    },
    "read": false,
    "content": "On it differed repeated wandered required in. On it differed repeated wandered required in.",
    "date": "Sun Oct 11 2020 16:20:42 GMT+0200 (Central European Summer Time)"
},
{
    "id": 3,
    "sender": {
        "name": "Jennifer Fritz",
        "profileImage": "https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&h=100&w=100"
    },
    "read": false,
    "content": "On it differed repeated wandered required in. On it differed repeated wandered required in.",
    "date": "Sun Oct 11 2020 14:09:25 GMT+0200 (Central European Summer Time)"
},
{
    "id": 5,
    "sender": {
        "name": "Art Fritz",
        "profileImage": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&h=100&w=100"
    },
    "read": false,
    "content": "On it differed repeated wandered required in. On it differed repeated wandered required in.",
    "date": "Sun Oct 11 2020 14:09:25 GMT+0200 (Central European Summer Time)"
}
]

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let activatedRoute: ActivatedRoute;
  // let store: { select: jasmine.Spy };
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesComponent ],
      providers: [ {provide: ActivatedRoute, useValue: { snapshot: { params: { initialState } } } }, provideMockStore( { initialState } )],
      imports: [StoreModule.forRoot({chats: messageReducer, enteredMessages: messageListReducer}), ReactiveFormsModule]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Messages component', () => {
    expect(component).toBeTruthy();
  });

  it('getContactsById test case in Messages component', () => {
    let mockId = initialState[0].id;
    expect(mockId).toBe(7);
    });

    it('should fetch all contacts from Store in messages component', () => {
      let storeValue = store.setState({initialState});
      expect(component.urlMessages).toBe(storeValue);
      });

    // it('should fetch all messages from input box in messages component', () => {
    //   component.ngOnInit();
    //   store.select.and.returnValue(of(mockContacts));
    //   component.ngOnInit();
    //   expect(component.newMessages).toBeTruthy();
    //   })
    });



