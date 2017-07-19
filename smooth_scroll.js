$(document).on('click', 'LINKS', function(e) { // LINKS = links with href to anchor

    e.preventDefault();

    var elemId = $(this).attr('href');

    if (elemId.length > 2) {
        var top = $(elemId).offset().top;


        $('body, html').animate({
            scrollTop: top
        }, 1500);

    }
});