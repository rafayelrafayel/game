(function ($) {
    $(document).ready(function () {
        $("#open-chest").click(function () {
            $("#win_modal").modal('show');
            stopAnimation("img.open");
            $("img.sine").addClass("show");
        });
    });
    $('#win_modal').on('hidden.bs.modal', function (e) {
        $("img.sine").removeClass("show");
        $("img.open").removeAttr("style");
    });
    function stopAnimation(element) {
        $(element).css("-webkit-animation", "none");
        $(element).css("-moz-animation", "none");
        $(element).css("-ms-animation", "none");
        $(element).css("animation", "none");
    }
})(jQuery);
