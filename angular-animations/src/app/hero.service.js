"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero(name, state) {
        if (state === void 0) { state = 'inactive'; }
        this.name = name;
        this.state = state;
    }
    Hero.prototype.toggleState = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    };
    return Hero;
}());
exports.Hero = Hero;
var ALL_HEROES = [
    'Windstorm',
    'RubberMan',
    'Bombasto',
    'Magneta',
    'Dynama',
    'Narco',
    'Celeritas',
    'Dr IQ',
    'Magma',
    'Tornado',
    'Mr. Nice'
].map(function (name) { return new Hero(name); });
var HeroService = (function () {
    function HeroService() {
        this.heroes = [];
    }
    HeroService.prototype.canAdd = function () {
        return this.heroes.length < ALL_HEROES.length;
    };
    HeroService.prototype.canRemove = function () {
        return this.heroes.length > 0;
    };
    HeroService.prototype.addActive = function (active) {
        if (active === void 0) { active = true; }
        var hero = ALL_HEROES[this.heroes.length];
        hero.state = active ? 'active' : 'inactive';
        this.heroes.push(hero);
    };
    HeroService.prototype.addInactive = function () {
        this.addActive(false);
    };
    HeroService.prototype.remove = function () {
        this.heroes.length -= 1;
    };
    HeroService = __decorate([
        core_1.Injectable()
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map