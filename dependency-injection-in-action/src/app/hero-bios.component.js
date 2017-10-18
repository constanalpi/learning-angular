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
var hero_service_1 = require("./hero.service");
var logger_service_1 = require("./logger.service");
//////// HeroBiosComponent ////
var HeroBiosComponent = (function () {
    function HeroBiosComponent(logger) {
        logger.logInfo('Creating HeroBiosComponent');
    }
    return HeroBiosComponent;
}());
HeroBiosComponent = __decorate([
    core_1.Component({
        selector: 'hero-bios',
        template: "\n    <hero-bio [heroId]=\"1\"></hero-bio>\n    <hero-bio [heroId]=\"2\"></hero-bio>\n    <hero-bio [heroId]=\"3\"></hero-bio>",
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], HeroBiosComponent);
exports.HeroBiosComponent = HeroBiosComponent;
//////// HeroBiosAndContactsComponent ////
var HeroBiosAndContactsComponent = (function () {
    function HeroBiosAndContactsComponent(logger) {
        logger.logInfo('Creating HeroBiosAndContactsComponent');
    }
    return HeroBiosAndContactsComponent;
}());
HeroBiosAndContactsComponent = __decorate([
    core_1.Component({
        selector: 'hero-bios-and-contacts',
        template: "\n    <hero-bio [heroId]=\"1\"> <hero-contact></hero-contact> </hero-bio>\n    <hero-bio [heroId]=\"2\"> <hero-contact></hero-contact> </hero-bio>\n    <hero-bio [heroId]=\"3\"> <hero-contact></hero-contact> </hero-bio>",
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], HeroBiosAndContactsComponent);
exports.HeroBiosAndContactsComponent = HeroBiosAndContactsComponent;
//# sourceMappingURL=hero-bios.component.js.map