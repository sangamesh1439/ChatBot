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
var photo_service_1 = require("./photo.service");
var HelpComponent = (function () {
    function HelpComponent(photoservice) {
        //approch to consume promises
        /*
        photoservice.getPhotos().then(response=>{
            this.photos = response;
        })*/
        var _this = this;
        this.photoservice = photoservice;
        //apprich to subscribe to observalbles 
        photoservice.getPhotos2().subscribe(function (photos) {
            _this.photos = photos;
        });
    }
    HelpComponent = __decorate([
        core_1.Component({
            selector: "help",
            template: "<h2> Help Page as Photo page </h2>\n\t \t<table>\n          <tr *ngFor=\"let photo of photos\">\n\t\t  <td>{{photo.id}}</td>\n\t\t  <td>{{photo.title}}</td>\t\t  \n          <td><img height=\"50px\" width=\"50px\" [src]='photo.url' ></td></tr>    \n        </table>  \t\t\n\t\t\n\t",
            styles: ["\n\t\tbutton{\n\t\t\t\tcolor:black;\n\t\t}\n\t\timg{\n\t\t\theight:50px,\n\t\t\twidth:50px\n\n\t\t}\n\t"],
            providers: [photo_service_1.PhotoService]
        }), 
        __metadata('design:paramtypes', [photo_service_1.PhotoService])
    ], HelpComponent);
    return HelpComponent;
}());
exports.HelpComponent = HelpComponent;
//# sourceMappingURL=help.component.js.map