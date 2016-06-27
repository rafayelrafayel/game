import { provideRouter, RouterConfig } from '@angular/router';
import {LoginComponent} from '../../app/components/login';
import {LotteryComponent} from '../../app/components/lottery';
import {JackpotComponent} from '../../app/components/jackpot';
import {AuthGuard} from '../../app/helpers/route-guard';

export const routes: RouterConfig = [

    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'lottery', component: LotteryComponent, canActivate: [AuthGuard] },
    { path: 'jackpot', component: JackpotComponent, canActivate: [AuthGuard] },

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];