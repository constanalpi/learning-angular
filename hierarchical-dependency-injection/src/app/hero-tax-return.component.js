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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var hero_tax_return_service_1 = require("./hero-tax-return.service");
var HeroTaxReturnComponent = (function () {
    function HeroTaxReturnComponent(heroTaxReturnService) {
        this.heroTaxReturnService = heroTaxReturnService;
        this.message = '';
        this.close = new core_1.EventEmitter();
    }
    Object.defineProperty(HeroTaxReturnComponent.prototype, "taxReturn", {
        get: function () {
            return this.heroTaxReturnService.taxReturn;
        },
        set: function (htr) {
            this.heroTaxReturnService.taxReturn = htr;
        },
        enumerable: true,
        configurable: true
    });
    HeroTaxReturnComponent.prototype.onCanceled = function () {
        this.flashMessage('Canceled');
        this.heroTaxReturnService.restoreTaxReturn();
    };
    ;
    HeroTaxReturnComponent.prototype.onClose = function () { this.close.emit(); };
    ;
    HeroTaxReturnComponent.prototype.onSaved = function () {
        this.flashMessage('Saved');
        this.heroTaxReturnService.saveTaxReturn();
    };
    HeroTaxReturnComponent.prototype.flashMessage = function (msg) {
        var _this = this;
        this.message = msg;
        setTimeout(function () { return _this.message = ''; }, 500);
    };
    return HeroTaxReturnComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HeroTaxReturnComponent.prototype, "close", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.HeroTaxReturn),
    __metadata("design:paramtypes", [hero_1.HeroTaxReturn])
], HeroTaxReturnComponent.prototype, "taxReturn", null);
HeroTaxReturnComponent = __decorate([
    core_1.Component({
        selector: 'hero-tax-return',
        templateUrl: './hero-tax-return.component.html',
        styleUrls: ['./hero-tax-return.component.css'],
        providers: [hero_tax_return_service_1.HeroTaxReturnService]
    }),
    __metadata("design:paramtypes", [hero_tax_return_service_1.HeroTaxReturnService])
], HeroTaxReturnComponent);
exports.HeroTaxReturnComponent = HeroTaxReturnComponent;
//# sourceMappingURL=hero-tax-return.component.js.map