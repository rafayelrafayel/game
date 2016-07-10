import {Injectable} from "@angular/core";
import {profileInterface } from '../../app/classes/profileInterface';

import {profileInfo} from '../../app/mocks/profile-mocks';
Injectable();
export class ProfileSvc {

    public getProfileInfo(): Promise<profileInterface> {
        return new Promise<profileInterface>(resolve =>
            setTimeout(() => resolve(profileInfo), 800) // 0.1 seconds
        );
    }

  

}