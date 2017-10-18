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
var HeroesListComponent = (function () {
    function HeroesListComponent(heroesService) {
        this.heroesService = heroesService;
        this.selectedTaxReturns = [];
        this.heroes = heroesService.getHeroes();
    }
    HeroesListComponent.prototype.showTaxReturn = function (hero) {
        var _this = this;
        this.heroesService.getTaxReturn(hero)
            .subscribe(function (htr) {
            // show if not currently shown
            if (!_this.selectedTaxReturns.find(function (tr) { return tr.id === htr.id; })) {
                _this.selectedTaxReturns.push(htr);
            }
        });
    };
    HeroesListComponent.prototype.closeTaxReturn = function (ix) {
        this.selectedTaxReturns.splice(ix, 1);
    };
    return HeroesListComponent;
}());
HeroesListComponent = __decorate([
    core_1.Component({
        selector: 'heroes-list',
        template: "\n    <div>\n      <h3>Hero Tax Returns</h3>\n      <ul>\n        <li *ngFor=\"let hero of heroes | async\"\n            (click)=\"showTaxReturn(hero)\">{{hero.name}}\n        </li>\n      </ul>\n      <hero-tax-return\n        *ngFor=\"let selected of selectedTaxReturns; let i = index\"\n        [taxReturn]=\"selected\"\n        (close)=\"closeTaxReturn(i)\">\n      </hero-tax-return>\n    </div>\n    ",
        styles: ['li {cursor: pointer;}']
    }),
    __metadata("design:paramtypes", [heroes_service_1.HeroesService])
], HeroesListComponent);
exports.HeroesListComponent = HeroesListComponent;
//# sourceMappingURL=heroes-list.component.js.map