import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  public message:string="";
  public messages: any[]=[];
  chatService: ChatService;
  constructor(_chatService:ChatService)
  {
    this.chatService=_chatService;
  }
  ngOnInit(): void {
    this.listenMessage();
  }

  public sendMessage()
  {
    this.chatService.sendMessage(this.message); 
    this.messages.push(this.message);
    this.message='';
  }
  public listenMessage()
  {
    this.chatService.listenMessage().subscribe((data:any)=>{
      console.log(data);
      this.messages.push(data.data);
    });
  }

}
