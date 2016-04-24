/*
 * These are globally available pipes in any template
 */

import {provide, PLATFORM_PIPES} from 'angular2/core';


import {TranslatePipe} from 'ng2-translate/ng2-translate';

// application_pipes: pipes that are global through out the application
export const APPLICATION_PIPES = [
  TranslatePipe
];

export const PIPES = [
  provide(PLATFORM_PIPES, { multi: true, useValue: APPLICATION_PIPES })
];
