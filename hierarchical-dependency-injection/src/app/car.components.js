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
var car_services_1 = require("./car.services");
////////// CCarComponent ////////////
var CCarComponent = (function () {
    function CCarComponent(carService) {
        this.description = carService.getCar().description + " (" + carService.name + ")";
    }
    return CCarComponent;
}());
CCarComponent = __decorate([
    core_1.Component({
        selector: 'c-car',
        template: "<div>C: {{description}}</div>",
        providers: [
            { provide: car_services_1.CarService, useClass: car_services_1.CarService3 }
        ]
    }),
    __metadata("design:paramtypes", [car_services_1.CarService])
], CCarComponent);
exports.CCarComponent = CCarComponent;
////////// BCarComponent ////////////
var BCarComponent = (function () {
    function BCarComponent(carService) {
        this.description = carService.getCar().description + " (" + carService.name + ")";
    }
    return BCarComponent;
}());
BCarComponent = __decorate([
    core_1.Component({
        selector: 'b-car',
        template: "\n    <div>B: {{description}}</div>\n    <c-car></c-car>\n  ",
        providers: [
            { provide: car_services_1.CarService, useClass: car_services_1.CarService2 },
            { provide: car_services_1.EngineService, useClass: car_services_1.EngineService2 }
        ]
    }),
    __metadata("design:paramtypes", [car_services_1.CarService])
], BCarComponent);
exports.BCarComponent = BCarComponent;
////////// ACarComponent ////////////
var ACarComponent = (function () {
    function ACarComponent(carService) {
        this.description = carService.getCar().description + " (" + carService.name + ")";
    }
    return ACarComponent;
}());
ACarComponent = __decorate([
    core_1.Component({
        selector: 'a-car',
        template: "\n  <div>A: {{description}}</div>\n  <b-car></b-car>"
    }),
    __metadata("design:paramtypes", [car_services_1.CarService])
], ACarComponent);
exports.ACarComponent = ACarComponent;
////////// CarsComponent ////////////
var CarsComponent = (function () {
    function CarsComponent() {
    }
    return CarsComponent;
}());
CarsComponent = __decorate([
    core_1.Component({
        selector: 'my-cars',
        template: "\n  <h3>Cars</h3>\n  <a-car></a-car>"
    })
], CarsComponent);
exports.CarsComponent = CarsComponent;
////////////////
exports.carComponents = [
    CarsComponent,
    ACarComponent, BCarComponent, CCarComponent
];
// generic car-related services
exports.carServices = [
    car_services_1.CarService, car_services_1.EngineService, car_services_1.TiresService
];
//# sourceMappingURL=car.components.js.map