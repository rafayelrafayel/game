import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {profileInterface } from '../../app/classes/profileInterface';





import { StorageSvc } from '../../app/services/StorageSvc';
import { ProfileSvc } from '../../app/services/ProfileSvc';



@Component({
    selector: 'my-app',
    templateUrl: 'app/views/index/index.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ProfileSvc, StorageSvc]
})
export class AppComponent implements OnInit {
    public loggedIn = true;
    private profileInfo: profileInterface = {
        balance: '',
        totalpayed: '',
    }



    constructor(private profile: ProfileSvc, private storage: StorageSvc) { }

    public getProfileInfo(): Promise<profileInterface> {
        return this.profile.getProfileInfo().then(
            data => this.profileInfo = data
        );
    }

    ngOnInit() {
        this.loggedIn = this.storage.isNotEmpty();
        this.getProfileInfo();
    }

}


