$(window).scroll(function() {
    var fixedMenu = $(FIXED_MENU);
    var fixedMenuHeight = fixedMenu.outerHeight(true); // height of selector which fixed after scroll

    if ($(window).width() > 768) { // When fixed active
        if ($(this).scrollTop() >= fixedMenuHeight) {
            fixedMenu.addClass('sticky');
            $('header').addClass('sticky');
        } else {
            fixedMenu.removeClass('sticky');
            $('header').removeClass('sticky');
        }
    }
});
