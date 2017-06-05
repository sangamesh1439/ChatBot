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
var router_1 = require('@angular/router');
var ProductComponent = (function () {
    function ProductComponent(activatedroute) {
        this.productId = 1111;
    }
    ProductComponent.prototype.ngOnInit = function () { };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'product-details',
            template: "<h2>Product Details for {{productId}}\n\n\t\t<a routerLink='men' >Men</a>\n\t\t<a routerLink='men' >Women</a>\n\t\t<a routerLink='men' >Kids</a>\n\t\t<router-outlet></router-outlet>\n\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=products.component.1.js.map