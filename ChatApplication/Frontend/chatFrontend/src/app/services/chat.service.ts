import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
socket:Socket;
  constructor(_socket:Socket) {
    this.socket=_socket
   }
  public sendMessage(message:string)
  {
    this.socket.emit("message",message) // data emit by client to the server

  }
  public listenMessage()
  {
    return this.socket.fromEvent("recived").pipe(map((data)=>data));
  } 
}
