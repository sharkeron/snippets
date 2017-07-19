$(function() {
    var maxHeight = 0;
    var blockHeight = $('.we-doing__item-info'); // each blocks which height higher

    blockHeight.each(function() {
        var height = $(this).height();

        if (height > maxHeight) {
            maxHeight = height;
        }
    });

   blockHeight.css('height', maxHeight);

})