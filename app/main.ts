///<reference path="../typings/index.d.ts"/>
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './components/app';
import { APP_ROUTER_PROVIDERS } from './routes/app-routes';
import { AuthGuard } from  './helpers/route-guard';
import { StorageSvc } from './services/StorageSvc';
import { HTTP_BINDINGS, HTTP_PROVIDERS  } from '@angular/http';
import { provide } from '@angular/core';  

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,AuthGuard,StorageSvc,HTTP_BINDINGS,provide(Window, {useValue: window})
])
.catch(err => console.error(err));


  