import { Component, Input, OnInit } from '@angular/core';
import { StorageSvc } from '../../app/services/StorageSvc';

@Component({
    selector: 'login-selector',
    templateUrl: 'app/views/index/login.html',
    providers:[StorageSvc]
})
export class LoginComponent implements OnInit {

    constructor(private storage: StorageSvc) {

    }

    public ngOnInit() {
        console.log(this.storage.isNotEmpty());
    }
}
