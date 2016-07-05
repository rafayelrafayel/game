System.register(["@angular/core", '../../app/services/SpinSvc'], function(exports_1, context_1) {
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
    var core_1, SpinSvc_1;
    var SpinComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SpinSvc_1_1) {
                SpinSvc_1 = SpinSvc_1_1;
            }],
        execute: function() {
            SpinComponent = (function () {
                function SpinComponent(elementRef, Spin) {
                    this.elementRef = elementRef;
                    this.Spin = Spin;
                    this.spinInfo = {
                        price: 0,
                        currency: '',
                        count: 0,
                        maxAmount: 0
                    };
                    this.winnerInfo = {
                        name: ''
                    };
                }
                ;
                SpinComponent.prototype.ngAfterViewInit = function () {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.src = "js/rouletteWheel.js";
                    this.elementRef.nativeElement.appendChild(s);
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.src = "js/spinDriver.js";
                    this.elementRef.nativeElement.appendChild(s);
                };
                SpinComponent.prototype.getSpinInfo = function () {
                    var _this = this;
                    return this.Spin.getSpinInfo().then(function (data) { return _this.spinInfo = data; });
                };
                SpinComponent.prototype.getWinnerInfo = function () {
                    var _this = this;
                    return this.Spin.winnerInfo().then(function (data) { return _this.winnerInfo = data; });
                };
                SpinComponent.prototype.ngOnInit = function () {
                    this.getSpinInfo();
                };
                SpinComponent = __decorate([
                    core_1.Component({
                        selector: 'spin-selector',
                        templateUrl: 'app/views/spin/index.html',
                        providers: [SpinSvc_1.SpinSvc]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, SpinSvc_1.SpinSvc])
                ], SpinComponent);
                return SpinComponent;
            }());
            exports_1("SpinComponent", SpinComponent);
        }
    }
});
//# sourceMappingURL=spin.js.map