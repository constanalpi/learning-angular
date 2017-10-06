"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var hero_app_component_1 = require("./hero-app.component");
var hero_app_main_component_1 = require("./hero-app-main.component");
var hero_details_component_1 = require("./hero-details.component");
var hero_controls_component_1 = require("./hero-controls.component");
var quest_summary_component_1 = require("./quest-summary.component");
var hero_team_component_1 = require("./hero-team.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            hero_app_component_1.HeroAppComponent,
            hero_app_main_component_1.HeroAppMainComponent,
            hero_details_component_1.HeroDetailsComponent,
            hero_controls_component_1.HeroControlsComponent,
            quest_summary_component_1.QuestSummaryComponent,
            hero_team_component_1.HeroTeamComponent
        ],
        bootstrap: [hero_app_component_1.HeroAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map