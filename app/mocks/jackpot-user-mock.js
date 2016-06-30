System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jackpotUsers, jackpotPreviuosActions, winnerInfo, jackpotInfo, lowStakeInfo, highStakeInfo;
    return {
        setters:[],
        execute: function() {
            exports_1("jackpotUsers", jackpotUsers = [
                { id: 11, name: 'Maynard Canchola', cost: 140, image: '/images/man-1.png', currency: "usd" },
                { id: 12, name: 'Dakota Heins', cost: 140, image: '/images/man-2.png', currency: "usd" },
                { id: 13, name: 'Lela Cairns', cost: 131, image: '/images/man-1.png', currency: "usd" },
                { id: 14, name: 'Carli Gran', cost: 160, image: '/images/man-2.png', currency: "usd" },
                { id: 15, name: 'Odette Wickert', cost: 150, image: '/images/man-1.png', currency: "usd" },
                { id: 16, name: 'Eura Hoeppner', cost: 190, image: '/images/man-2.png', currency: "usd" },
                { id: 17, name: 'Kirsten Trader', cost: 120, image: '/images/man-1.png', currency: "usd" },
                { id: 18, name: 'Rolanda Toenjes', cost: 110, image: '/images/man-2.png', currency: "usd" },
                { id: 19, name: 'Ara Sayre', cost: 130, image: '/images/man-1.png', currency: "usd" },
                { id: 20, name: 'Emilee Brandl', cost: 180, image: '/images/man-2.png', currency: "usd" }
            ]);
            exports_1("jackpotPreviuosActions", jackpotPreviuosActions = [
                { id: 11, name: 'Maynard Canchola', cost: 40, currency: "usd" },
                { id: 12, name: 'Dakota Heins', cost: 80, currency: "usd" },
                { id: 13, name: 'Lela Cairns', cost: 126, currency: "usd" },
            ]);
            exports_1("winnerInfo", winnerInfo = [
                { id: 20, name: 'Emilee Brandl', cost: 15.5, currency: "m" },
            ]);
            exports_1("jackpotInfo", jackpotInfo = {
                fee: 150,
                entries: 1500,
                total: 1350,
                currency: 'usd'
            });
            exports_1("lowStakeInfo", lowStakeInfo = {
                name: 'Lowstakes',
                current_pot: 15,
                more_to_go: 6,
                currency: 'usd'
            });
            exports_1("highStakeInfo", highStakeInfo = {
                name: 'Highstakes',
                current_pot: 156,
                more_to_go: 6,
                currency: 'usd'
            });
        }
    }
});
//# sourceMappingURL=jackpot-user-mock.js.map