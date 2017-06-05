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
var router_1 = require("@angular/router");
var WelcomeComponent = (function () {
    function WelcomeComponent(router) {
        this.router = router;
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
    WelcomeComponent.prototype.viewproducts = function () {
        this.router.navigate(['/products']);
        //this.router.navigate(['/products',"params if we need to pass any "]);
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: "welcome",
            template: "\n\n\t",
            styles: ["\n\t\tbutton{\n\t\t\t\tcolor:black;\n\t\t}\n\t\timg{\n\t\t\theight:50px,\n\t\t\twidth:50px\n\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcomecomponent.js.map