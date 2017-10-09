"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable: member-ordering */
var core_1 = require("@angular/core");
var HeroFormTemplateComponent = (function () {
    function HeroFormTemplateComponent() {
        this.powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
        this.hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
    }
    return HeroFormTemplateComponent;
}());
HeroFormTemplateComponent = __decorate([
    core_1.Component({
        selector: 'hero-form-template',
        templateUrl: './hero-form-template.component.html'
    })
], HeroFormTemplateComponent);
exports.HeroFormTemplateComponent = HeroFormTemplateComponent;
//# sourceMappingURL=hero-form-template.component.js.map