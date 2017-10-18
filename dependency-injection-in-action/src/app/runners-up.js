"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.RUNNERS_UP = new core_1.InjectionToken('RunnersUp');
function runnersUpFactory(take) {
    return function (winner, heroService) {
        /* ... */
        return heroService
            .getAllHeroes()
            .filter(function (hero) { return hero.name !== winner.name; })
            .map(function (hero) { return hero.name; })
            .slice(0, Math.max(0, take))
            .join(', ');
    };
}
exports.runnersUpFactory = runnersUpFactory;
;
//# sourceMappingURL=runners-up.js.map