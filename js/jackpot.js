$(document).ready(function() {
	var h = $("div.select-winner").height();
	var el = $("div.select-winner");
	var duration = 7000;
	var playes_count = el.children().length;
	var step = el.children().height();
	$("div.select-winner > *").clone().appendTo($("div.select-winner"));

	var index = 0;
	var duration = 50;
	var top = -$("div.select-winner").height()+180;

	function loop(duration, top) {
		$("div.select-winner").css('top',top)
		for (var i=0; i<=30; i++) {
			if (i==30) {
				var a = (Math.floor(Math.random() * (playes_count-1)) - 1) + playes_count;
				duration = 2000;
				top = -step * a;
				setTimeout(function() {
					$("div.winner").show();
					$("div.winner .circle-winner").css("background-image", "url("+el.children().eq(a+1).find("img").attr("src")+")");
				}, 30*50*2+3000)
			}
			$("div.select-winner").animate({top: top}, duration);
			if (i!=30) {
				$("div.select-winner").animate({top:0},duration)
			}
		}
	}
	$("#enter-jackpot").click(function() {
		$("div.winner").hide();
		loop(duration, top);
	})
});