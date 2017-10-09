"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable: member-ordering forin */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forbidden_name_directive_1 = require("../shared/forbidden-name.directive");
var HeroFormReactiveComponent = (function () {
    function HeroFormReactiveComponent() {
        this.powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
        this.hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
    }
    HeroFormReactiveComponent.prototype.ngOnInit = function () {
        this.heroForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(this.hero.name, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(4),
                forbidden_name_directive_1.forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
            ]),
            'alterEgo': new forms_1.FormControl(this.hero.alterEgo),
            'power': new forms_1.FormControl(this.hero.power, forms_1.Validators.required)
        });
    };
    Object.defineProperty(HeroFormReactiveComponent.prototype, "name", {
        get: function () { return this.heroForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroFormReactiveComponent.prototype, "power", {
        get: function () { return this.heroForm.get('power'); },
        enumerable: true,
        configurable: true
    });
    return HeroFormReactiveComponent;
}());
HeroFormReactiveComponent = __decorate([
    core_1.Component({
        selector: 'hero-form-reactive',
        templateUrl: './hero-form-reactive.component.html'
    })
], HeroFormReactiveComponent);
exports.HeroFormReactiveComponent = HeroFormReactiveComponent;
//# sourceMappingURL=hero-form-reactive.component.js.map