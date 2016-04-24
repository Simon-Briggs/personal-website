import {Component} from 'angular2/core';
import {Title} from './title';
import {XLarge} from './x-large';
import {AppState} from '../app.service';
import {TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ TranslatePipe ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [require('./home.css')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {
  // Set our default values
  localState = { value: '' };
  educationList;
  todos;

  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

    this.educationList = [{
      name: "IBM",
      flag: "/assets/img/gb.svg",
      location: "UK",
      startDate: 2012,
      duration: 4
    }, {
        name: "Waseda",
        flag: "/assets/img/jp.svg",
        location: "Japan",
        startDate: 2010,
        duration: 1
      }, {
        name: "Nottingham",
        flag: "/assets/img/gb.svg",
        location: "UK",
        startDate: 2009,
        duration: 3
      }];
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

}
