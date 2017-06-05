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
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.name = "Sammy";
        this.msg = "Welcome to My application"; // model or prop
        this.imgpath = "images/motog4.jpg";
    }
    WelcomeComponent.prototype.greet = function () {
        alert("Helllo");
    };
    WelcomeComponent.prototype.display = function (data1) {
        this.data = data1;
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: "welcome",
            template: "<p> Welcome {{msg}}</p>\n\t\t<button (click)=\"greet()\">click Here</button>\n\t\t<input type =\"text\" #input (keyup)=\"display(input.value)\" >{{data}}\n\t\tProperty Binding : <img [src]=\"imgpath\">\n\t\t<br>\n\t\t<input type =\"text\" [(ngModel)]=name >{{name}}\n\t\t<br>\n\t\t<input type =\"text\" [ngModel]=name >{{name}}\n\t",
            styles: ["\n\t\tbutton{\n\t\t\t\tcolor:black;\n\t\t}\n\t\timg{\n\t\t\theight:50px,\n\t\t\twidth:50px\n\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcomecomponent.1.js.map