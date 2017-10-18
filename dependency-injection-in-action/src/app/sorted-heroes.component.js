"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var hero_service_1 = require("./hero.service");
/////// HeroesBaseComponent /////
var HeroesBaseComponent = (function () {
    function HeroesBaseComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesBaseComponent.prototype.ngOnInit = function () {
        this.heroes = this.heroService.getAllHeroes();
        this.afterGetHeroes();
    };
    // Post-process heroes in derived class override.
    HeroesBaseComponent.prototype.afterGetHeroes = function () { };
    return HeroesBaseComponent;
}());
HeroesBaseComponent = __decorate([
    core_1.Component({
        selector: 'unsorted-heroes',
        template: "<div *ngFor=\"let hero of heroes\">{{hero.name}}</div>",
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroesBaseComponent);
exports.HeroesBaseComponent = HeroesBaseComponent;
/////// SortedHeroesComponent /////
var SortedHeroesComponent = (function (_super) {
    __extends(SortedHeroesComponent, _super);
    function SortedHeroesComponent(heroService) {
        return _super.call(this, heroService) || this;
    }
    SortedHeroesComponent.prototype.afterGetHeroes = function () {
        this.heroes = this.heroes.sort(function (h1, h2) {
            return h1.name < h2.name ? -1 :
                (h1.name > h2.name ? 1 : 0);
        });
    };
    return SortedHeroesComponent;
}(HeroesBaseComponent));
SortedHeroesComponent = __decorate([
    core_1.Component({
        selector: 'sorted-heroes',
        template: "<div *ngFor=\"let hero of heroes\">{{hero.name}}</div>",
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], SortedHeroesComponent);
exports.SortedHeroesComponent = SortedHeroesComponent;
//# sourceMappingURL=sorted-heroes.component.js.map