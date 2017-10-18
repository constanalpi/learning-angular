"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:one-line*/
var core_1 = require("@angular/core");
var logger_service_1 = require("./logger.service");
var DateLoggerService = (function (_super) {
    __extends(DateLoggerService, _super);
    function DateLoggerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateLoggerService.prototype.logInfo = function (msg) { _super.prototype.logInfo.call(this, stamp(msg)); };
    DateLoggerService.prototype.logDebug = function (msg) { _super.prototype.logInfo.call(this, stamp(msg)); };
    DateLoggerService.prototype.logError = function (msg) { _super.prototype.logError.call(this, stamp(msg)); };
    return DateLoggerService;
}(logger_service_1.LoggerService));
DateLoggerService = __decorate([
    core_1.Injectable()
], DateLoggerService);
exports.DateLoggerService = DateLoggerService;
function stamp(msg) { return msg + ' at ' + new Date(); }
//# sourceMappingURL=date-logger.service.js.map