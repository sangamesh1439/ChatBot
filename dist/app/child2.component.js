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
var message_service_1 = require("./message.service");
var Child2Component = (function () {
    function Child2Component(messageservice) {
        var _this = this;
        this.messageservice = messageservice;
        this.messageservice.msgBroadcaster.subscribe(function (data) {
            _this.msg = data;
        });
    }
    Child2Component = __decorate([
        core_1.Component({
            selector: "child2",
            template: "<h2> Child 2 </h2>\t\t\n\t\t<h2>Msg from c1 {{msg}}</h2>\n\t",
            styles: ["\n\t\tbutton{\n\t\t\t\tcolor:black;\n\t\t}\n\t\timg{\n\t\t\theight:50px,\n\t\t\twidth:50px\n\n\t\t}\n\t"],
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], Child2Component);
    return Child2Component;
}());
exports.Child2Component = Child2Component;
//# sourceMappingURL=child2.component.js.map