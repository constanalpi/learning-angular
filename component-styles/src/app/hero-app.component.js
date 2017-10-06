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
var HeroAppComponent = (function () {
    function HeroAppComponent() {
        this.hero = new hero_1.Hero('Human Torch', ['Mister Fantastic', 'Invisible Woman', 'Thing']);
    }
    Object.defineProperty(HeroAppComponent.prototype, "themeClass", {
        get: function () {
            return 'theme-light';
        },
        enumerable: true,
        configurable: true
    });
    return HeroAppComponent;
}());
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HeroAppComponent.prototype, "themeClass", null);
HeroAppComponent = __decorate([
    core_1.Component({
        selector: 'hero-app',
        template: "\n    <h1>Tour of Heroes</h1>\n    <hero-app-main [hero]=hero></hero-app-main>",
        styles: ['h1 { font-weight: normal; }']
    })
], HeroAppComponent);
exports.HeroAppComponent = HeroAppComponent;
//# sourceMappingURL=hero-app.component.js.map