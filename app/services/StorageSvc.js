System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StorageSvc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StorageSvc = (function () {
                function StorageSvc(window) {
                    this.window = window;
                }
                StorageSvc.prototype.isNotEmpty = function () {
                    if (this.window.sessionStorage.hasOwnProperty('userInfo') && this.window.sessionStorage['userInfo'] !== 'null') {
                        return true;
                    }
                    return true;
                };
                StorageSvc.prototype.getStorage = function () {
                    if (this.window.sessionStorage.hasOwnProperty('userInfo') && this.window.sessionStorage['userInfo'] !== 'null') {
                        return JSON.parse(this.window.sessionStorage['userInfo']);
                    }
                    return {};
                };
                StorageSvc.prototype.removeStorage = function () {
                    this.window.sessionStorage['userInfo'] = null;
                    return true;
                };
                StorageSvc.prototype.getProperty = function (name, from) {
                    var name = name || null, from = from || null;
                    var stoarageInfo = this.getStorage();
                    if (typeof stoarageInfo === 'object') {
                        if (name !== null) {
                            if (from === null) {
                                return stoarageInfo[name];
                            }
                            else if (stoarageInfo.hasOwnProperty(from)) {
                                return stoarageInfo[from][name];
                            }
                        }
                    }
                    return null;
                };
                StorageSvc = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Window])
                ], StorageSvc);
                return StorageSvc;
            }());
            exports_1("StorageSvc", StorageSvc);
        }
    }
});
//# sourceMappingURL=StorageSvc.js.map