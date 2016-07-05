System.register(["@angular/core", '../../app/mocks/spin-mocks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, spin_mocks_1;
    var SpinSvc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spin_mocks_1_1) {
                spin_mocks_1 = spin_mocks_1_1;
            }],
        execute: function() {
            core_1.Injectable();
            SpinSvc = (function () {
                function SpinSvc() {
                }
                SpinSvc.prototype.getSpinInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(spin_mocks_1.spinInfo); }, 800);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                SpinSvc.prototype.winnerInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(spin_mocks_1.winnerInfo); }, 800);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                return SpinSvc;
            }());
            exports_1("SpinSvc", SpinSvc);
        }
    }
});
//# sourceMappingURL=SpinSvc.js.map