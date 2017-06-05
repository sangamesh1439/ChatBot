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
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var message_service_1 = require("./message.service");
var Child1Component = (function () {
    function Child1Component(messageservice) {
        this.messageservice = messageservice;
        this.update = new core_2.EventEmitter();
    }
    Child1Component.prototype.updatename = function (newname) {
        this.update.emit(newname);
        console.log("Event Emitted from child");
    };
    Child1Component.prototype.sendMsg = function (msg) {
        this.messageservice.sendMsg(msg);
        console.log("Sending Messgae ", msg);
        //Invoke service here
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], Child1Component.prototype, "name", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], Child1Component.prototype, "update", void 0);
    Child1Component = __decorate([
        core_1.Component({
            selector: "child1",
            template: "<h2> Child 1 name is also  {{name}}</h2>\t\t\n\t\t\n\n\t\t<div>\t\n\tEnter Name : <input type =\"text\" #nameInput (keyup)=\"0\"/> <button (click)=\"updatename(nameInput.value)\" >Update Name</button>\t\n\t\t<div>\n\t\t<div>\n\t\tEnter Message : <input type=\"text\" #msg/> <button (click)=\"sendMsg(msg.value)\">Send Message</button>\n\t\t</div>\n\n\t",
            styles: ["\n\t\tbutton{\n\t\t\t\tcolor:black;\n\t\t}\n\t\timg{\n\t\t\theight:50px,\n\t\t\twidth:50px\n\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], Child1Component);
    return Child1Component;
}());
exports.Child1Component = Child1Component;
//# sourceMappingURL=child1.component.js.map