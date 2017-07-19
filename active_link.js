/* 4. Set active item for active section by scroll */
$(window).scroll(function() {

    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();

    var blockIds = [];

    $('.nav-menu__item a').each(function(index, el) { // LINKS with id anchors
        var id = $(this).attr('href');

        if (id.length > 2) {
            blockIds.push(id);
        }
    });

    // Conditions for active
    $(blockIds).each(function(index, id) {

        var idHeight = $(id).outerHeight();
        var idTop = $(id).offset().top;
        var idBottom = $(id).offset().top + idHeight;

        if (scrollPos + (windowHeight / 3) > idTop && scrollPos + (windowHeight / 3) < idBottom) {
            $('.nav-menu__item').find('.active').removeClass('active');
            $('.nav-menu__item a[href="' + id + '"]').parent().addClass('active');

        } else {
            $('.nav-menu__item a[href="' + id + '"]').closest('div').removeClass('active');
        }
    }); // end each

});