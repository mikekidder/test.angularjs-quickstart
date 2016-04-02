import {Component, bind} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

// import router goodies
import {ROUTER_PROVIDERS, RouteConfig, RouterOutlet, RouterLink, 
        LocationStrategy, HashLocationStrategy} from 'angular2/router';

// import our two components we will route between
import {About} from './about';
import {Home} from './home';

@Component({
  selector: 'demo-app',
  template: `
    <a [routerLink]="['./Home']">Home</a>
	  <a [routerLink]="['./About']">About</a>
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
  `,
  
  // add our router directives we will be using
  directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    // these are our two routes
    { path: '/', component: Home, as: 'Home' },
    { path: '/about/...', component: About, as: 'About' }
])
export class App { }

bootstrap(App, [
  ROUTER_PROVIDERS,
  bind(LocationStrategy).toClass(HashLocationStrategy)
]);