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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable component-selector-name one-line check-open-brace */
/* tslint:disable:*/
var core_1 = require("@angular/core");
// A component base class (see AlexComponent)
var Base = (function () {
    function Base() {
        this.name = 'Count Basie';
    }
    return Base;
}());
exports.Base = Base;
// Marker class, used as an interface
var Parent = (function () {
    function Parent() {
    }
    return Parent;
}());
exports.Parent = Parent;
var DifferentParent = Parent;
// Helper method to provide the current component instance in the name of a `parentType`.
// The `parentType` defaults to `Parent` when omitting the second parameter.
var provideParent = function (component, parentType) {
    return { provide: parentType || Parent, useExisting: core_1.forwardRef(function () { return component; }) };
};
// Simpler syntax version that always provides the component in the name of `Parent`.
var provideTheParent = function (component) {
    return { provide: Parent, useExisting: core_1.forwardRef(function () { return component; }) };
};
///////// C - Child //////////
var templateC = "\n  <div class=\"c\">\n    <h3>{{name}}</h3>\n    <p>My parent is {{parent?.name}}</p>\n  </div>";
var CarolComponent = (function () {
    function CarolComponent(parent) {
        this.parent = parent;
        this.name = 'Carol';
    }
    return CarolComponent;
}());
CarolComponent = __decorate([
    core_1.Component({
        selector: 'carol',
        template: templateC
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [Parent])
], CarolComponent);
exports.CarolComponent = CarolComponent;
var ChrisComponent = (function () {
    function ChrisComponent(parent) {
        this.parent = parent;
        this.name = 'Chris';
    }
    return ChrisComponent;
}());
ChrisComponent = __decorate([
    core_1.Component({
        selector: 'chris',
        template: templateC
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [Parent])
], ChrisComponent);
exports.ChrisComponent = ChrisComponent;
//////  Craig ///////////
/**
 * Show we cannot inject a parent by its base class.
 */
var CraigComponent = (function () {
    function CraigComponent(alex) {
        this.alex = alex;
    }
    return CraigComponent;
}());
CraigComponent = __decorate([
    core_1.Component({
        selector: 'craig',
        template: "\n  <div class=\"c\">\n    <h3>Craig</h3>\n    {{alex ? 'Found' : 'Did not find'}} Alex via the base class.\n  </div>"
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [Base])
], CraigComponent);
exports.CraigComponent = CraigComponent;
//////// B - Parent /////////
var templateB = "\n  <div class=\"b\">\n    <div>\n      <h3>{{name}}</h3>\n      <p>My parent is {{parent?.name}}</p>\n    </div>\n    <carol></carol>\n    <chris></chris>\n  </div>";
var BarryComponent = BarryComponent_1 = (function () {
    function BarryComponent(parent) {
        this.parent = parent;
        this.name = 'Barry';
    }
    return BarryComponent;
}());
BarryComponent = BarryComponent_1 = __decorate([
    core_1.Component({
        selector: 'barry',
        template: templateB,
        providers: [{ provide: Parent, useExisting: core_1.forwardRef(function () { return BarryComponent_1; }) }]
    }),
    __param(0, core_1.SkipSelf()), __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [Parent])
], BarryComponent);
exports.BarryComponent = BarryComponent;
var BobComponent = BobComponent_1 = (function () {
    function BobComponent(parent) {
        this.parent = parent;
        this.name = 'Bob';
    }
    return BobComponent;
}());
BobComponent = BobComponent_1 = __decorate([
    core_1.Component({
        selector: 'bob',
        template: templateB,
        providers: [provideParent(BobComponent_1)]
    }),
    __param(0, core_1.SkipSelf()), __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [Parent])
], BobComponent);
exports.BobComponent = BobComponent;
var BethComponent = BethComponent_1 = (function () {
    function BethComponent(parent) {
        this.parent = parent;
        this.name = 'Beth';
    }
    return BethComponent;
}());
BethComponent = BethComponent_1 = __decorate([
    core_1.Component({
        selector: 'beth',
        template: templateB,
        providers: [provideParent(BethComponent_1, DifferentParent)]
    }),
    __param(0, core_1.SkipSelf()), __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [Parent])
], BethComponent);
exports.BethComponent = BethComponent;
///////// A - Grandparent //////
var AlexComponent = AlexComponent_1 = (function (_super) {
    __extends(AlexComponent, _super);
    function AlexComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Alex';
        return _this;
    }
    return AlexComponent;
}(Base));
AlexComponent = AlexComponent_1 = __decorate([
    core_1.Component({
        selector: 'alex',
        template: "\n    <div class=\"a\">\n      <h3>{{name}}</h3>\n      <cathy></cathy>\n      <craig></craig>\n      <carol></carol>\n    </div>",
        providers: [{ provide: Parent, useExisting: core_1.forwardRef(function () { return AlexComponent_1; }) }],
    })
    // Todo: Add `... implements Parent` to class signature
], AlexComponent);
exports.AlexComponent = AlexComponent;
/////
var AliceComponent = AliceComponent_1 = (function () {
    function AliceComponent() {
        this.name = 'Alice';
    }
    return AliceComponent;
}());
AliceComponent = AliceComponent_1 = __decorate([
    core_1.Component({
        selector: 'alice',
        template: "\n    <div class=\"a\">\n      <h3>{{name}}</h3>\n      <barry></barry>\n      <beth></beth>\n      <bob></bob>\n      <carol></carol>\n    </div> ",
        providers: [provideParent(AliceComponent_1)]
    })
], AliceComponent);
exports.AliceComponent = AliceComponent;
//////  Cathy ///////////
/**
 * Show we can inject a parent by component type
 */
var CathyComponent = (function () {
    function CathyComponent(alex) {
        this.alex = alex;
    }
    return CathyComponent;
}());
CathyComponent = __decorate([
    core_1.Component({
        selector: 'cathy',
        template: "\n  <div class=\"c\">\n    <h3>Cathy</h3>\n    {{alex ? 'Found' : 'Did not find'}} Alex via the component class.<br>\n  </div>"
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [AlexComponent])
], CathyComponent);
exports.CathyComponent = CathyComponent;
///////// ParentFinder //////
var ParentFinderComponent = (function () {
    function ParentFinderComponent() {
    }
    return ParentFinderComponent;
}());
ParentFinderComponent = __decorate([
    core_1.Component({
        selector: 'parent-finder',
        template: "\n    <h2>Parent Finder</h2>\n    <alex></alex>\n    <alice></alice>"
    })
], ParentFinderComponent);
exports.ParentFinderComponent = ParentFinderComponent;
var BarryComponent_1, BobComponent_1, BethComponent_1, AlexComponent_1, AliceComponent_1;
//# sourceMappingURL=parent-finder.component.js.map