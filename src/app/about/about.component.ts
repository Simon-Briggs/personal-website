import {Component} from 'angular2/core';
import {AppState} from '../app.service';


/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
  `],
  template: `
  <md-card>
    <h1>
      Contact me: <a href="mailto:simonbriggs@ymail.com?subject=simonbriggs.website">simonbriggs@ymail.com</a>
    </h1>
  </md-card>

  <md-card class="s-card">
    <md-card-content>
      <span x-large>Send me a message:</span>

      <form (ngSubmit)="submitState(value)" autocomplete="off">
        <md-input placeholder="Send me a message" autofocus></md-input>
        <button md-raised-button color="primary">Submit</button>
      </form>

    </md-card-content>
  </md-card>
  `
})
export class About {
  value = 'value';

  constructor(public appState: AppState) {

  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }


  ngOnInit() {
    console.log('hello `About` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    // setTimeout(() => {
    //
    //   let asyncDataPromise = asyncMockDataPromiseFactory();
    //   asyncDataPromise.then(json => {
    //     console.log('async mockData', json);
    //   });
    //
    // });
  }

}
