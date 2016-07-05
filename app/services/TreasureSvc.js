System.register(["@angular/core", '../../app/mocks/treasure-mocks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, treasure_mocks_1;
    var TreasureSvc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (treasure_mocks_1_1) {
                treasure_mocks_1 = treasure_mocks_1_1;
            }],
        execute: function() {
            core_1.Injectable();
            TreasureSvc = (function () {
                function TreasureSvc() {
                }
                TreasureSvc.prototype.getStillBeOptained = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(treasure_mocks_1.stillBeOptained); }, 800);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                TreasureSvc.prototype.getAlreadyOptained = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(treasure_mocks_1.alreadyOptained); }, 1000);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                TreasureSvc.prototype.getTreasureInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(treasure_mocks_1.treasureInfo); }, 900);
                    });
                };
                return TreasureSvc;
            }());
            exports_1("TreasureSvc", TreasureSvc);
        }
    }
});
//# sourceMappingURL=TreasureSvc.js.map