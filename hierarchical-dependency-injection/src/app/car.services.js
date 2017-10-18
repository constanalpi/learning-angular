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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/// Model ///
var Car = (function () {
    function Car(engine, tires) {
        this.engine = engine;
        this.tires = tires;
        this.name = 'Avocado Motors';
    }
    Object.defineProperty(Car.prototype, "description", {
        get: function () {
            return this.name + " car with " +
                (this.engine.cylinders + " cylinders and " + this.tires.make + " tires.");
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
exports.Car = Car;
var Engine = (function () {
    function Engine() {
        this.cylinders = 4;
    }
    return Engine;
}());
exports.Engine = Engine;
var Tires = (function () {
    function Tires() {
        this.make = 'Flintstone';
        this.model = 'Square';
    }
    return Tires;
}());
exports.Tires = Tires;
//// Engine services ///
var EngineService = (function () {
    function EngineService() {
        this.id = 'E1';
    }
    EngineService.prototype.getEngine = function () { return new Engine(); };
    return EngineService;
}());
EngineService = __decorate([
    core_1.Injectable()
], EngineService);
exports.EngineService = EngineService;
var EngineService2 = (function () {
    function EngineService2() {
        this.id = 'E2';
    }
    EngineService2.prototype.getEngine = function () {
        var eng = new Engine();
        eng.cylinders = 8;
        return eng;
    };
    return EngineService2;
}());
EngineService2 = __decorate([
    core_1.Injectable()
], EngineService2);
exports.EngineService2 = EngineService2;
//// Tire services ///
var TiresService = (function () {
    function TiresService() {
        this.id = 'T1';
    }
    TiresService.prototype.getTires = function () { return new Tires(); };
    return TiresService;
}());
TiresService = __decorate([
    core_1.Injectable()
], TiresService);
exports.TiresService = TiresService;
/// Car Services ///
var CarService = (function () {
    function CarService(engineService, tiresService) {
        this.engineService = engineService;
        this.tiresService = tiresService;
        this.id = 'C1';
    }
    CarService.prototype.getCar = function () {
        return new Car(this.engineService.getEngine(), this.tiresService.getTires());
    };
    Object.defineProperty(CarService.prototype, "name", {
        get: function () {
            return this.id + "-" + this.engineService.id + "-" + this.tiresService.id;
        },
        enumerable: true,
        configurable: true
    });
    return CarService;
}());
CarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [EngineService,
        TiresService])
], CarService);
exports.CarService = CarService;
var CarService2 = (function (_super) {
    __extends(CarService2, _super);
    function CarService2(engineService, tiresService) {
        var _this = _super.call(this, engineService, tiresService) || this;
        _this.engineService = engineService;
        _this.tiresService = tiresService;
        _this.id = 'C2';
        return _this;
    }
    CarService2.prototype.getCar = function () {
        var car = _super.prototype.getCar.call(this);
        car.name = 'BamBam Motors, BroVan 2000';
        return car;
    };
    return CarService2;
}(CarService));
CarService2 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [EngineService,
        TiresService])
], CarService2);
exports.CarService2 = CarService2;
var CarService3 = (function (_super) {
    __extends(CarService3, _super);
    function CarService3(engineService, tiresService) {
        var _this = _super.call(this, engineService, tiresService) || this;
        _this.engineService = engineService;
        _this.tiresService = tiresService;
        _this.id = 'C3';
        return _this;
    }
    CarService3.prototype.getCar = function () {
        var car = _super.prototype.getCar.call(this);
        car.name = 'Chizzamm Motors, Calico UltraMax Supreme';
        return car;
    };
    return CarService3;
}(CarService2));
CarService3 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [EngineService,
        TiresService])
], CarService3);
exports.CarService3 = CarService3;
//# sourceMappingURL=car.services.js.map