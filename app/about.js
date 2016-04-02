System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var AboutHome, AboutItem, About;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AboutHome = (function () {
                function AboutHome() {
                }
                AboutHome = __decorate([
                    core_1.Component({
                        selector: 'about-home',
                        template: "<h3>About Home</h3>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutHome);
                return AboutHome;
            }());
            AboutItem = (function () {
                function AboutItem(routeParams) {
                    this.id = routeParams.get('id');
                }
                AboutItem = __decorate([
                    core_1.Component({
                        selector: 'about-item',
                        template: "<h3>About Item Id: {{id}}</h3>"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], AboutItem);
                return AboutItem;
            }());
            About = (function () {
                function About() {
                }
                About = __decorate([
                    core_1.Component({
                        selector: 'app-about',
                        template: "\n      <h1>About</h1>\n\t    <a [routerLink]=\"['./AboutHome']\">Home</a>\n\t    <a [routerLink]=\"['./AboutItem', {id: 1}]\">Item 1</a>\n\t    <a [routerLink]=\"['./AboutItem', {id: 2}]\">Item 2</a>\n      <div class=\"inner-outlet\">\n        <router-outlet></router-outlet>\n      </div>\n    ",
                        directives: [router_1.RouterOutlet, router_1.RouterLink]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: AboutHome, as: 'AboutHome', useAsDefault: true },
                        { path: '/item/:id', component: AboutItem, as: 'AboutItem' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], About);
                return About;
            }());
            exports_1("About", About);
        }
    }
});
//# sourceMappingURL=about.js.map