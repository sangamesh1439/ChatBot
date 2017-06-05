"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_service_1 = require("./message.service");
var MessageDashboard = (function () {
    function MessageDashboard(messageservice) {
        this.messageservice = messageservice;
        this.messages = Array();
        this.newmsg = "";
    }
    MessageDashboard.prototype.send = function () {
        var _this = this;
        console.log("message sending " + this.newmsg);
        this.messages.push({ msg: this.newmsg, id: "user" });
        /*
        this.messageservice.sendReceiveMsg2().then(msg=>{
        a
        })*/
        this.messageservice.sendReceiveMsg(this.newmsg).subscribe(function (msg) {
            _this.messages.push({ msg: msg, id: "server" });
        });
        this.newmsg = "";
    };
    MessageDashboard.prototype.ngOnInit = function () { };
    MessageDashboard = __decorate([
        core_1.Component({
            selector: 'message-dashboard',
            template: "\n\n    <h2> Banking Chat Bot App(Sangamesh Somawar)</h2>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      \n    </div>\n    <div class=\"col-sm-8\">\n      \n      <ul class=\"list-group\">\n         <li *ngFor=\"let msg of messages\" class=\"list-group-item\" [ngClass]=\"msg.id\" ><img src=\"/app/serverimg.png\" id=\"serverimg\" *ngIf=\" msg.id == 'server' \">  {{msg.msg}}  <img src=\"/app/userimg.png\" id=\"userimg\" *ngIf=\" msg.id == 'user' \"> </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-2\">      \n        \n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"container\"  id=\"footer\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-3\">\n      \n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"col-sm-9\">\n        <input type=\"text\" id=\"messageBox\" [(ngModel)]=newmsg placeholder=\"Enter Message Here\" class=\"form-control\">  \n        </div>\n        \n        <div class=\"col-sm-3\">\n\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"send()\"  >\n      <span class=\"glyphicon glyphicon-send\"></span> Send\n    </button>\n\n           \n\n        </div>  \n        \n    </div>\n    <div class=\"col-sm-3\">      \n        \n    </div>\n\n\n    \n  </div>\n</div>\n\n\n\n\t",
            styles: ["\n\n    #userimg{\n        max-width:50px;\n    }\n    #serverimg{\n        max-width:80px;\n    }\n\n    #messageBox{\n        width:100%;\n        border: 2px solid;\n        border-top-left-radius: 2em;\n    border-top-right-radius: 2em;\n    border-bottom-left-radius: 2em;\n    border-bottom-right-radius: 2em;   \n    }\n\n    \n\nh2 {\n    text-align: center;\n}\n\n\n    \n    #dash{\n        \n\n    }\n\n#footer{\n  position: fixed;\n  bottom: 0; \n  margin-bottom:30px;\n}\n\n    li{\n        margin: 0 0 10px 0;\n        \n\n        \n        \n    }\n\n#msgborder{\nborder: 2px solid;\n\n}\n\n    .server {\n    padding: 10px;\n    border-top-left-radius: 2em;\n    border-top-right-radius: 2em;\n    border-bottom-right-radius: 2em;\n    \n}\n\n.user {    \n    padding: 10px;\n    border-top-left-radius: 2em;\n    border-top-right-radius: 2em;\n    border-bottom-left-radius: 2em;\n\n    text-align: right;\n\n    }\n\n\n    "],
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageDashboard);
    return MessageDashboard;
}());
exports.MessageDashboard = MessageDashboard;
//# sourceMappingURL=message-dashboard.component.js.map