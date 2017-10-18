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
var heroes_service_1 = require("./heroes.service");
var HeroTaxReturnService = (function () {
    function HeroTaxReturnService(heroService) {
        this.heroService = heroService;
    }
    Object.defineProperty(HeroTaxReturnService.prototype, "taxReturn", {
        get: function () {
            return this.currentTaxReturn;
        },
        set: function (htr) {
            this.originalTaxReturn = htr;
            this.currentTaxReturn = htr.clone();
        },
        enumerable: true,
        configurable: true
    });
    HeroTaxReturnService.prototype.restoreTaxReturn = function () {
        this.taxReturn = this.originalTaxReturn;
    };
    HeroTaxReturnService.prototype.saveTaxReturn = function () {
        this.taxReturn = this.currentTaxReturn;
        this.heroService.saveTaxReturn(this.currentTaxReturn).subscribe();
    };
    return HeroTaxReturnService;
}());
HeroTaxReturnService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [heroes_service_1.HeroesService])
], HeroTaxReturnService);
exports.HeroTaxReturnService = HeroTaxReturnService;
//# sourceMappingURL=hero-tax-return.service.js.map