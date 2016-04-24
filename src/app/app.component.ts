/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';
import {TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {MissingTranslationHandler} from 'ng2-translate/ng2-translate';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(key: string) {
      console.log("Missing translation ", key);
      return 'some value';
  }
}
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ TranslatePipe ],
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
  translate : TranslateService;
  constructor(public appState: AppState, translate: TranslateService) {
        
        this.translate = translate;
         // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
  
  changeLang( lang : string) {
    console.log("Lang", lang);
    this.translate.use(lang);
    console.log("translate", this.translate.instant("history.location"));
  }

}