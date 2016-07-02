jQuery(document).ready(function () {
    (function ($) {
        var counter = 0;
        var top = "";
        var sample = new Audio("/sounds/slot_jackpot.mp3");
        var w = new Audio("/sounds/bell_ring.mp3");
        function slot() {
            var duration = 100;
            $("div.select-winner").animate({
                top: -$("div.select-winner").height(),
            },duration, function() {
                $(this).css('top', 0);
                counter++;
                if (counter < 10 * 7) {
                    slot();
                } else {
                    $("div.select-winner").css('top', -$("div.select-winner").height() + 3 * 90);
                    var max = $("div.select-winner").children('div').length/2 - 1;
                    var min = 0;
                    var index = Math.floor(Math.random() * (max - min + 1)) + min;
                    duration = 2500;
                    top = -90 * (index+1);
                    $("div.select-winner").animate({top: top}, duration, 'easeOutExpo', function() {
                        var winner = $("div.participants").children('div').eq(index);
                        $("div.winner .circle-winner").css("background-image", "url("+winner.find("img").attr("src")+")");
                        $("div.win-info span.name").text(winner.find("span.name").text());
                        $("div.winner").delay(1000).fadeIn(300, function(){
                            w.play();
                            $("div.select-winner > div").slice(-max+1).remove();
                            $("div.select-winner").css('top',0);
                            $("#enter-jackpot").prop('disabled', false);
                            counter = 0;
                        });
                    });
                }
            });
        }
        function enterJackpot() {
            $("div.select-winner > *").clone().appendTo($("div.select-winner"));
            sample.play();
            slot();
            $("div.winner").hide();
            $(".circle-winner").css("visibility", "visible");
            $("div.circle-winner").show();
        }
        $("#enter-jackpot").click(function (e) {
            $(this).prop('disabled', true);
            e.preventDefault();
            enterJackpot();
        });
    })(jQuery);
});