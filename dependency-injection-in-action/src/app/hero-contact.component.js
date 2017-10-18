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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_cache_service_1 = require("./hero-cache.service");
var logger_service_1 = require("./logger.service");
var HeroContactComponent = (function () {
    function HeroContactComponent(heroCache, loggerService) {
        this.heroCache = heroCache;
        this.loggerService = loggerService;
        this.hasLogger = false;
        if (loggerService) {
            this.hasLogger = true;
            loggerService.logInfo('HeroContactComponent can log!');
        }
    }
    Object.defineProperty(HeroContactComponent.prototype, "phoneNumber", {
        get: function () { return this.heroCache.hero.phone; },
        enumerable: true,
        configurable: true
    });
    return HeroContactComponent;
}());
HeroContactComponent = __decorate([
    core_1.Component({
        selector: 'hero-contact',
        template: "\n  <div>Phone #: {{phoneNumber}}\n  <span *ngIf=\"hasLogger\">!!!</span></div>"
    }),
    __param(0, core_1.Host() // limit to the host component's instance of the HeroCacheService
    ),
    __param(1, core_1.Host() // limit search for logger; hides the application-wide logger
    ),
    __param(1, core_1.Optional() // ok if the logger doesn't exist
    ),
    __metadata("design:paramtypes", [hero_cache_service_1.HeroCacheService,
        logger_service_1.LoggerService])
], HeroContactComponent);
exports.HeroContactComponent = HeroContactComponent;
//# sourceMappingURL=hero-contact.component.js.map