System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './about', './home'], function(exports_1, context_1) {
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
    var core_1, browser_1, router_1, about_1, home_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'demo-app',
                        template: "\n    <a [routerLink]=\"['./Home']\">Home</a>\n\t  <a [routerLink]=\"['./About']\">About</a>\n    <div class=\"outer-outlet\">\n      <router-outlet></router-outlet>\n    </div>\n  ",
                        // add our router directives we will be using
                        directives: [router_1.RouterOutlet, router_1.RouterLink]
                    }),
                    router_1.RouteConfig([
                        // these are our two routes
                        { path: '/', component: home_1.Home, as: 'Home' },
                        { path: '/about/...', component: about_1.About, as: 'About' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
            browser_1.bootstrap(App, [
                router_1.ROUTER_PROVIDERS,
                core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map