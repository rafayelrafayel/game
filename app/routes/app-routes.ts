import { provideRouter, RouterConfig } from '@angular/router';
import {LoginComponent} from '../../app/components/login';
import {LotteryComponent} from '../../app/components/lottery';

export const routes: RouterConfig = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lottery', component: LotteryComponent },
 
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];