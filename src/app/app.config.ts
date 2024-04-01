import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
 
import { myRouting } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(myRouting), provideHttpClient()]
};