"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
//// HeroTaxReturn ////
var nextId = 100;
var HeroTaxReturn = (function () {
    function HeroTaxReturn(id, hero, income) {
        if (id === void 0) { id = nextId++; }
        if (income === void 0) { income = 0; }
        this.id = id;
        this.hero = hero;
        this.income = income;
        if (id === 0) {
            id = nextId++;
        }
    }
    Object.defineProperty(HeroTaxReturn.prototype, "name", {
        get: function () { return this.hero.name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroTaxReturn.prototype, "tax", {
        get: function () { return this.income ? .10 * this.income : 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroTaxReturn.prototype, "tid", {
        get: function () { return this.hero.tid; },
        enumerable: true,
        configurable: true
    });
    HeroTaxReturn.prototype.toString = function () {
        return "" + this.hero.name;
    };
    HeroTaxReturn.prototype.clone = function () {
        return new HeroTaxReturn(this.id, this.hero, this.income);
    };
    return HeroTaxReturn;
}());
exports.HeroTaxReturn = HeroTaxReturn;
//# sourceMappingURL=hero.js.map