import { Component, OnInit } from '@angular/core';
import { CodeImpsService } from '../code-imp.service';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styles: [],
})
export class Chat2Component implements OnInit {
  errorCallBack(arg0: {}, arg1: (frame: any) => void, errorCallBack: any) {
    throw new Error("Method not implemented.");
  }
  listMessageBaseDonne: any;
  webSocketEndPoint: string = 'http://localhost:8080/ws';
  stompClient: any;
   topic: string = "/topic/greetings";
   messageAffich:{};
   contentm: string;
   message:any;
   chatisHere=true;
   ishere;
   ishere2;
  username;

  constructor(private codeImpsService:CodeImpsService,private authservice:TokenStorageService) {
    this.codeImpsService.getMessage().subscribe(data=>
      { this.listMessageBaseDonne=data
      this.username=this.authservice.getUser().username;
      console.log(this.listMessageBaseDonne)});
      console.log("Initialize WebSocket Connection");
      let ws = new SockJS(this.webSocketEndPoint);
      this.stompClient = Stomp.over(ws);
      const _this = this;
      _this.stompClient.connect({}, function (frame) {
          _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
              _this.onMessageReceived(sdkEvent);
          });
          //_this.stompClient.reconnect_delay = 2000;
      }, this.errorCallBack);
  }


  ngOnInit() {
  }
  chats: any[] = [


    {
      status: 'primary',
      title: ' Chat Documentation',
      messages: [
        {
          text: 'Primary!',
          date: new Date(),
          reply: false,
          user: {
            name: 'Bot',
            avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
          },
        },
      ],
    },

  ];

  sendMessages(messages, event) {
    messages.push({
      text: event.message,
      date: new Date(),
      reply: false,
      user:{

      name: 'Jonh Doe' }


    });
  }
  sendMessage(event){



    this.message={user:this.authservice.getUser().username,content:event.message}

    this.stompClient.send("/app/hello", {}, JSON.stringify(this.message));
  }
  onMessageReceived(message) {

    this.listMessageBaseDonne.push({
      messageoutpu:JSON.parse(message.body).messageoutpu,
source:JSON.parse(message.body).source,
date:JSON.parse(message.body).date

    })
    this.messageAffich=JSON.stringify(message.body);
    //console.log(this.messageAffich+" ici message"+ this.message.user);

   // const tr = this.renderer.createElement('tr');
   // const td1=this.renderer.createElement('td');
   // const td2=this.renderer.createElement('td');
   // const td3=this.renderer.createElement('td');
   // td1.innerText=  JSON.parse(message.body).source
   // td2.innerText=JSON.parse(message.body).messageoutpu
    //td3.innerText= JSON.parse(message.body).date
    // this.renderer.appendChild(tr,td1);

    //this.renderer.appendChild(tr,td2);
    //this.renderer.appendChild(tr,td3);
    //this.renderer.appendChild(this.tble.nativeElement,tr);

      //console.log();
 //   this.chatcomponent.handleMessage(JSON.stringify(message.body));
}
ch(d){
//
//$('ok').click(false);
this.ishere=true;
console.log(d);
  //this.chatisHere=this.ishere;
}
ch2(){
 this.chatisHere=!this.chatisHere;

 // this.ishere2=false;
console.log(false);
}

}
