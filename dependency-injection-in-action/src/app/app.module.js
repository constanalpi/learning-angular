"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// import { AppRoutingModule }             from './app-routing.module';
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var hero_data_1 = require("./hero-data");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_component_1 = require("./app.component");
var hero_bio_component_1 = require("./hero-bio.component");
var hero_bios_component_1 = require("./hero-bios.component");
var hero_of_the_month_component_1 = require("./hero-of-the-month.component");
var hero_contact_component_1 = require("./hero-contact.component");
var sorted_heroes_component_1 = require("./sorted-heroes.component");
var highlight_directive_1 = require("./highlight.directive");
var parent_finder_component_1 = require("./parent-finder.component");
var declarations = [
    app_component_1.AppComponent,
    hero_bios_component_1.HeroBiosComponent, hero_bios_component_1.HeroBiosAndContactsComponent, hero_bio_component_1.HeroBioComponent,
    sorted_heroes_component_1.HeroesBaseComponent, sorted_heroes_component_1.SortedHeroesComponent,
    hero_of_the_month_component_1.HeroOfTheMonthComponent, hero_contact_component_1.HeroContactComponent,
    highlight_directive_1.HighlightDirective,
    parent_finder_component_1.ParentFinderComponent,
];
var a_components = [parent_finder_component_1.AliceComponent, parent_finder_component_1.AlexComponent];
var b_components = [parent_finder_component_1.BarryComponent, parent_finder_component_1.BethComponent, parent_finder_component_1.BobComponent];
var c_components = [
    parent_finder_component_1.CarolComponent, parent_finder_component_1.ChrisComponent, parent_finder_component_1.CraigComponent,
    parent_finder_component_1.CathyComponent
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(hero_data_1.HeroData)
            // AppRoutingModule TODO: add routes
        ],
        declarations: [
            declarations,
            a_components,
            b_components,
            c_components,
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map