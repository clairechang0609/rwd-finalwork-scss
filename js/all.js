$(document).ready(function () {
    // sidebar menu
    $(".jq-menu-button").on("click", function (e) {
        e.preventDefault();
        $(this).parents(".header").toggleClass("active");
    });

    // banner title animate
    $(".jq-banner").on("mouseover", function () {
        $(".jq-banner-title").addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(".jq-banner-title").removeClass('animated pulse');
        });
    });

    $(window).scroll(function () {
        var scroll_top = $(window).scrollTop();
        // banner bg parallax
        $('.jq-banner').css('background-position-y', +(scroll_top / 2) + 'px')

        // chef award show
        $('.jq-today-chef').each(function () {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('show');
            }
        });
    });

    // menu button click scrolling animate
    $('.jq-scrolltop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var target_top = $(target).offset().top;
        $('html, body').animate({ scrollTop: target_top }, 1000);
    });

    // shopping > fa-heart focus
    $('.fa-heart').click(function () {
        $(this).toggleClass('far').toggleClass('fas');
    });
});