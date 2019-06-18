$(document).ready(function() {


    /* For the sticky navigation */
    $('.js--section-aboutMe').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /* Scroll on buttons */
    $('.js--scroll-to-aboutMe').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-aboutMe').offset().top}, 1000);
    });

    $('.js--scroll-to-skills').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-skills').offset().top}, 1000);
    });

    $('.js--scroll-to-portfolio').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-portfolio').offset().top}, 1000);
    });

    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });

});
