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
var logger_service_1 = require("./logger.service");
var user_service_1 = require("./user.service");
var UserContextService = (function () {
    function UserContextService(userService, loggerService) {
        this.userService = userService;
        this.loggerService = loggerService;
        this.loggedInSince = new Date();
    }
    UserContextService.prototype.loadUser = function (userId) {
        var user = this.userService.getUserById(userId);
        this.name = user.name;
        this.role = user.role;
        this.loggerService.logDebug('loaded User');
    };
    return UserContextService;
}());
UserContextService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService, logger_service_1.LoggerService])
], UserContextService);
exports.UserContextService = UserContextService;
//# sourceMappingURL=user-context.service.js.map