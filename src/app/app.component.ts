/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [  ],
  providers: [  ],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.css'),
   ],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Simon Briggs';
  url = 'simonbriggs.website';

  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}