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
var villains_service_1 = require("./villains.service");
var VillainsListComponent = (function () {
    function VillainsListComponent(villainsService) {
        this.villainsService = villainsService;
        this.villains = villainsService.getVillains();
    }
    return VillainsListComponent;
}());
VillainsListComponent = __decorate([
    core_1.Component({
        selector: 'villains-list',
        templateUrl: './villains-list.component.html',
        providers: [villains_service_1.VillainsService]
    }),
    __metadata("design:paramtypes", [villains_service_1.VillainsService])
], VillainsListComponent);
exports.VillainsListComponent = VillainsListComponent;
//# sourceMappingURL=villains-list.component.js.map