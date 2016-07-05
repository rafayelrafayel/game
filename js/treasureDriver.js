(function ($) {
    $(document).ready(function () {
        $("#open-chest").click(function () {
            stopAnimation("img.open");
            $("img.sine").addClass("show");
        });
    });
    function stopAnimation(element) {
        $(element).css("-webkit-animation", "none");
        $(element).css("-moz-animation", "none");
        $(element).css("-ms-animation", "none");
        $(element).css("animation", "none");
    }
})(jQuery);