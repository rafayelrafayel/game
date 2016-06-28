import { Injectable } from '@angular/core';

@Injectable()
export class StorageSvc {
    constructor(private window: Window) {

    }
    public isNotEmpty(): boolean {
        if (this.window.sessionStorage.hasOwnProperty('userInfo') && this.window.sessionStorage['userInfo'] !== 'null') {
            return true;
        }
        return true;

    }

    public getStorage(): Object {

        if (this.window.sessionStorage.hasOwnProperty('userInfo') && this.window.sessionStorage['userInfo'] !== 'null') {
            return JSON.parse(this.window.sessionStorage['userInfo']);
        }
        return {};
    }
    public getProperty(name, from): any {
        var name = name || null,
            from = from || null;
        var stoarageInfo = this.getStorage();

        if (typeof stoarageInfo === 'object') {
            if (name !== null) {
                if (from === null) {
                    return stoarageInfo[name];
                } else if (stoarageInfo.hasOwnProperty(from)) {
                    return stoarageInfo[from][name];
                }
            }
        }
        return null;
    }
}