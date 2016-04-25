/*

import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {BaseRequestOptions, Http, HTTP_PROVIDERS, XHRBackend} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

// Load the implementations that should be tested
import {App} from './app.component';
import {AppState} from './app.service';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    BaseRequestOptions,
    HTTP_PROVIDERS,
    MockBackend,
    provide(XHRBackend, { useExisting: MockBackend }),
    TranslateService,
    provide(Http, {
      useFactory: function (backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    Http,
    TranslateService,
    AppState,
    App
  ]);

  it('should have a url', inject([App], ( app) => {
    console.log(app.url);
    expect(app.url).toEqual('https://simonbriggs.website');
  }));

});
*/
