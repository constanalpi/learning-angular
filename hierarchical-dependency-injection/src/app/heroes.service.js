"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var hero_1 = require("./hero");
var HeroesService = (function () {
    function HeroesService() {
        this.heroes = [
            { id: 1, name: 'RubberMan', tid: '082-27-5678' },
            { id: 2, name: 'Tornado', tid: '099-42-4321' }
        ];
        this.heroTaxReturns = [
            new hero_1.HeroTaxReturn(10, this.heroes[0], 35000),
            new hero_1.HeroTaxReturn(20, this.heroes[1], 1250000)
        ];
    }
    HeroesService.prototype.getHeroes = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            observer.next(_this.heroes);
            observer.complete();
        });
    };
    HeroesService.prototype.getTaxReturn = function (hero) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var htr = _this.heroTaxReturns.find(function (t) { return t.hero.id === hero.id; });
            observer.next(htr || new hero_1.HeroTaxReturn(0, hero));
            observer.complete();
        });
    };
    HeroesService.prototype.saveTaxReturn = function (heroTaxReturn) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var htr = _this.heroTaxReturns.find(function (t) { return t.id === heroTaxReturn.id; });
            if (htr) {
                heroTaxReturn = Object.assign(htr, heroTaxReturn); // demo: mutate
            }
            else {
                _this.heroTaxReturns.push(heroTaxReturn);
            }
            observer.next(heroTaxReturn);
            observer.complete();
        });
    };
    return HeroesService;
}());
HeroesService = __decorate([
    core_1.Injectable()
], HeroesService);
exports.HeroesService = HeroesService;
//# sourceMappingURL=heroes.service.js.map