
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './components/app';
import { APP_ROUTER_PROVIDERS } from './routes/app-routes';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));


 