$(window).scroll(function() {
    var fixedMenu = $(FIXED_MENU).outerHeight(true); // height of selector which fixed after scroll

    if ($(window).width() > 768) { // When fixed active
        if ($(this).scrollTop() >= headerTopHeight) {
            $('.header-bottom').addClass('sticky');
            $('body').addClass('sticky');
        } else {
            $('.header-bottom').removeClass('sticky');
            $('body').removeClass('sticky');
        }
    }
});