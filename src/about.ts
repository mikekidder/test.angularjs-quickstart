import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink, RouteParams} from 'angular2/router';

@Component({
  selector: 'about-home',
  template: `<h3>About Home</h3>`
})
class AboutHome { }

@Component({
  selector: 'about-item',
  template: `<h3>About Item Id: {{id}}</h3>`
})
class AboutItem { 
  id: any;
  constructor(routeParams: RouteParams) {
    this.id = routeParams.get('id');
  }
}

@Component({
    selector: 'app-about',
    template: `
      <h1>About</h1>
	    <a [routerLink]="['./AboutHome']">Home</a>
	    <a [routerLink]="['./AboutItem', {id: 1}]">Item 1</a>
	    <a [routerLink]="['./AboutItem', {id: 2}]">Item 2</a>
      <div class="inner-outlet">
        <router-outlet></router-outlet>
      </div>
    `,
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
  { path: '/', component: AboutHome, as: 'AboutHome', useAsDefault: true },
  { path: '/item/:id', component: AboutItem, as: 'AboutItem' }
])
export class About { }