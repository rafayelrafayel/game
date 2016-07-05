(function ($) {
    $(function () {
        var itemsToShow = 14;//parseInt(4 + Math.random() * 10);
        //console.log(itemsToShow);
        var items = {};
        for (var i = 0; i < itemsToShow; i++) {
            items[i] = "";//'ITEM ' + (i + 1);
        }
        ;
        $('#canvas').rouletteWheel({
            items: items,
            selected: function (key, value) {
                //alert('SELECTED : ' + key + ' => ' + value);
                $("#win_modal").modal('show');
            },
            spinText: 'You can spin 500 times with Your current balance'
        });

    });
})(jQuery);

