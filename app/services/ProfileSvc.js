System.register(["@angular/core", '../../app/mocks/profile-mocks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, profile_mocks_1;
    var ProfileSvc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_mocks_1_1) {
                profile_mocks_1 = profile_mocks_1_1;
            }],
        execute: function() {
            core_1.Injectable();
            ProfileSvc = (function () {
                function ProfileSvc() {
                }
                ProfileSvc.prototype.getProfileInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(profile_mocks_1.profileInfo); }, 800);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                return ProfileSvc;
            }());
            exports_1("ProfileSvc", ProfileSvc);
        }
    }
});
//# sourceMappingURL=ProfileSvc.js.map