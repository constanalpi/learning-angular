"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hero_1 = require("./hero");
var HeroData = (function () {
    function HeroData() {
    }
    HeroData.prototype.createDb = function () {
        var heroes = [
            new hero_1.Hero(1, 'Windstorm'),
            new hero_1.Hero(2, 'Bombasto'),
            new hero_1.Hero(3, 'Magneta'),
            new hero_1.Hero(4, 'Tornado')
        ];
        return { heroes: heroes };
    };
    return HeroData;
}());
exports.HeroData = HeroData;
//# sourceMappingURL=hero-data.js.map