import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { WebSocketAPI } from '../Webocket';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { VirtualTimeScheduler } from 'rxjs';
import { CodeImpsService } from '../code-imp.service';

@Component({
  selector: 'app-chate',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  listMessageBaseDonne: any;
  hiddenchat=false;
  errorCallBack(arg0: {}, arg1: (frame: any) => void, errorCallBack: any) {
    throw new Error("Method not implemented.");
  }
  title = 'angular8-springboot-websocket';

  @ViewChild('tble',{static: false}) tble: ElementRef;
  webSocketEndPoint: string = 'http://localhost:8080/ws';
  topic: string = "/topic/greetings";
  stompClient: any;

  greeting: any;
  messageAffich:{};
  contentm: string;
  message:any;


  constructor(private authservice:TokenStorageService,public websocket:WebSocketAPI,private codeImpsService:CodeImpsService,private renderer: Renderer2){
    this.codeImpsService.getMessage().subscribe(data=>{ this.listMessageBaseDonne=data
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
    }, this.errorCallBack);  }



  ngOnInit() {

  }
  ToogleChat(){
this.hiddenchat=!this.hiddenchat;
  }


  disconnect(){

    if (this.stompClient !== null) {
      this.stompClient.disconnect();
  }
  }

  sendMessage(){



    this.message={user:this.authservice.getUser().username,content:this.contentm}

    this.stompClient.send("/app/hello", {}, JSON.stringify(this.message));
  }
  onMessageReceived(message) {

    this.messageAffich=JSON.stringify(message.body);
    //console.log(this.messageAffich+" ici message"+ this.message.user);

    const tr = this.renderer.createElement('tr');
    const td1=this.renderer.createElement('td');
    const td2=this.renderer.createElement('td');
    const td3=this.renderer.createElement('td');
    td1.innerText=  JSON.parse(message.body).source
    td2.innerText=JSON.parse(message.body).messageoutpu
    td3.innerText= JSON.parse(message.body).date
    this.renderer.appendChild(tr,td1);

    this.renderer.appendChild(tr,td2);
    this.renderer.appendChild(tr,td3);
    this.renderer.appendChild(this.tble.nativeElement,tr);
      //console.log();
 //   this.chatcomponent.handleMessage(JSON.stringify(message.body));
}


}

$(document).ready(function () {

  $('#btn-hidden').on('click', function () {
      $('#contenu').toggleClass('chat');
  });

});
