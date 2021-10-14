import { inject, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessagesService } from './messages.service';
import { Messages } from './messages';

let baseUrl = 'https://raw.githubusercontent.com/NablaT/test-api/master/assets/messages.json.txt';
const mockContacts: Messages[] = [
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
describe('Messages Service', () => {

  let httpMock: HttpTestingController;
  let messagesService: MessagesService;

  beforeEach(() => {

    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ MessagesService ]
    });

    messagesService = TestBed.inject(MessagesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
   expect(messagesService).toBeTruthy();
  });

  it('Should fetch all contacts', () => {
    messagesService.getContacts().subscribe((res) => {
    expect(res.length).toBe(6);
  });
    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toEqual("GET");
    req.flush(mockContacts);
    httpMock.verify();
  });

  it('Should fetch all contacts', () => {
    messagesService.getContacts().subscribe((contacts) => {
      const contact = contacts.find(contacts => contacts.id = 7);
      expect(contact?.sender?.name).toBe("Almara Bemma");
  });
    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toEqual("GET");
    req.flush(mockContacts);
    httpMock.verify();
  });
});
