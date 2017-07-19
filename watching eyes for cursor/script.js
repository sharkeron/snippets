    //Watching eyes
        $(function() {

            /* Логика работы глаз лого в прилипающем меню */
            var el1 = $('.eye-left__logo'), eyeBall1 = el1.siblings('div');
            var el2 = $('.eye-right__logo'), eyeBall2 = el2.siblings('div');
            el1.show();
            el2.show();
            var x1 = el1.offset().left + 37, y1 = el1.offset().top + 25;
            var r = 7, x, y, x2, y2, isEyeProcessed = false;
            $('html').mousemove(function(e) {
                if (!isEyeProcessed) {
                    isEyeProcessed = true;
                    var x2 = e.clientX, y2 = e.clientY;
                    y = ((r * (y2 - y1)) / Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))) + y1;
                    x = (((y - y1) * (x2 - x1)) / (y2 - y1)) + x1;
                    eyeBall1.css({
                        marginTop : (y - y1 + 1) + 'px',
                        marginLeft: (x - x1) + 'px'
                    });
                    eyeBall2.css({
                        marginTop : (y - y1 + 1) + 'px',
                        marginLeft: (x - x1) + 'px'
                    });
                    isEyeProcessed = false;
                }
            });

            setInterval(function() {
                eyeBall1.css({
                    marginTop : '5px',
                    marginLeft: '6px'
                });
                eyeBall2.css({
                    marginTop : '5px',
                    marginLeft: '6px'
                });
            }, 4000);
        })