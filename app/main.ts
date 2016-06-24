
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './components/app';
import { APP_ROUTER_PROVIDERS } from './routes/app-routes';
import { AuthGuard } from  './helpers/route-guard';
import { AuthenticationSvc }         from  './services/AuthenticationSvc';
import { HTTP_BINDINGS, HTTP_PROVIDERS  } from '@angular/http';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,AuthGuard,AuthenticationSvc,HTTP_BINDINGS
])
.catch(err => console.error(err));


 