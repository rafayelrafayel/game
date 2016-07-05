System.register(["@angular/core", '../../app/services/TreasureSvc'], function(exports_1, context_1) {
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
    var core_1, TreasureSvc_1;
    var TreasureComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TreasureSvc_1_1) {
                TreasureSvc_1 = TreasureSvc_1_1;
            }],
        execute: function() {
            TreasureComponent = (function () {
                function TreasureComponent(elementRef, Treasure) {
                    this.elementRef = elementRef;
                    this.Treasure = Treasure;
                    this.treasureInfo = {
                        open_price: 0,
                        open_count: 0,
                        currency: ''
                    };
                }
                ;
                TreasureComponent.prototype.ngAfterViewInit = function () {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.src = "js/treasureDriver.js";
                    this.elementRef.nativeElement.appendChild(s);
                };
                TreasureComponent.prototype.getStillBeOptained = function () {
                    var _this = this;
                    return this.Treasure.getStillBeOptained().then(function (stillOptained) { return _this.stillOptained = stillOptained; });
                };
                TreasureComponent.prototype.getAlreadyOptained = function () {
                    var _this = this;
                    return this.Treasure.getAlreadyOptained().then(function (alreadyOptained) { return _this.alreadyOptained = alreadyOptained; });
                };
                TreasureComponent.prototype.getTreasureInfo = function () {
                    var _this = this;
                    return this.Treasure.getTreasureInfo().then(function (data) { return _this.treasureInfo = data; });
                };
                TreasureComponent.prototype.ngOnInit = function () {
                    this.getStillBeOptained();
                    this.getAlreadyOptained();
                    this.getTreasureInfo();
                };
                TreasureComponent = __decorate([
                    core_1.Component({
                        selector: 'treasure-selector',
                        templateUrl: 'app/views/treasure/index.html',
                        providers: [TreasureSvc_1.TreasureSvc]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, TreasureSvc_1.TreasureSvc])
                ], TreasureComponent);
                return TreasureComponent;
            }());
            exports_1("TreasureComponent", TreasureComponent);
        }
    }
});
//# sourceMappingURL=treasure.js.map