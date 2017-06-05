import { Component, OnInit } from '@angular/core';

import {MessageService} from "./message.service"
@Component({
    selector: 'message-dashboard',
    template: `

    <h2> Banking Chat Bot App(Sangamesh Somawar)</h2>
<div class="container">
  <div class="row">
    <div class="col-sm-2">
      
    </div>
    <div class="col-sm-8">
      
      <ul class="list-group">
         <li *ngFor="let msg of messages" class="list-group-item" [ngClass]="msg.id" ><img src="/app/serverimg.png" id="serverimg" *ngIf=" msg.id == 'server' ">  {{msg.msg}}  <img src="/app/userimg.png" id="userimg" *ngIf=" msg.id == 'user' "> </li>
      </ul>
    </div>
    <div class="col-sm-2">      
        
    </div>
  </div>
</div>




<div class="container"  id="footer">
  <div class="row">

    <div class="col-sm-3">
      
    </div>
    <div class="col-sm-6">
        <div class="col-sm-9">
        <input type="text" id="messageBox" [(ngModel)]=newmsg placeholder="Enter Message Here" class="form-control">  
        </div>
        
        <div class="col-sm-3">

    <button type="button" class="btn btn-info" (click)="send()"  >
      <span class="glyphicon glyphicon-send"></span> Send
    </button>

           

        </div>  
        
    </div>
    <div class="col-sm-3">      
        
    </div>


    
  </div>
</div>



	`,
    styles:[`

    #userimg{
        max-width:50px;
    }
    #serverimg{
        max-width:80px;
    }

    #messageBox{
        width:100%;
        border: 2px solid;
        border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    border-bottom-left-radius: 2em;
    border-bottom-right-radius: 2em;   
    }

    

h2 {
    text-align: center;
}


    
    #dash{
        

    }

#footer{
  position: fixed;
  bottom: 0; 
  margin-bottom:30px;
}

    li{
        margin: 0 0 10px 0;
        

        
        
    }

#msgborder{
border: 2px solid;

}

    .server {
    padding: 10px;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em;
    
}

.user {    
    padding: 10px;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    border-bottom-left-radius: 2em;

    text-align: right;

    }


    `],
    providers:[MessageService]
})
export class MessageDashboard implements OnInit {
 messages:any=Array();
 newmsg:string="";
 
    constructor(private messageservice : MessageService) { 
        
        
    }



    send()
    {
        

        console.log("message sending "+ this.newmsg);
        this.messages.push({msg:this.newmsg,id:"user"});
        /*
        this.messageservice.sendReceiveMsg2().then(msg=>{
		a
		})*/ 

        this.messageservice.sendReceiveMsg(this.newmsg).subscribe(msg=>{
            this.messages.push({msg:msg,id:"server"})
		})
        this.newmsg="";
    }

    ngOnInit() { }
}