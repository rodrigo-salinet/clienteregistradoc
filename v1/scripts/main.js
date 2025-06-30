
$(document).ready(function () {
    var windowHeight = $(window).height(); $("").css("min-height", windowHeight); $('a[href*=\\#]:not([href=\\#])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var walkPixels = target.offset().top; $

                    ('html,body').animate({
                        scrollTop: walkPixels
                    }, 2000);
                return false;
            }
        }
    });
    if ($('.menu-responsive').lenght > 0) {
        setMaxHeight($('.menu-responsive'));
    }
    $('.block-bar').click(function () {
        $('.menu-responsive').addClass('active');
    });

    $('.fechar').click(function () {
        $('.menu-responsive').removeClass('active');
    });

    $('.owl-banner').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: false,
        touchDrag: true,
        items: 1
    });

    $('.owl-blog').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<img src='images/esquerda-blog.png'>", "<img src='images/direita-blog.png'>"],
        dots: false,
        mouseDrag: false,
        touchDrag: true,
        items: 1
    });

    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }, spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };

    if ($(".cep-mask").length > 0) {
        $(".cep-mask").mask('99.999-999');
    }

    if ($(".date-mask").length > 0) {
        $(".date-mask").mask('99/99/9999');
    }

    if ($(".number-mask").length > 0) {
        $(".number-mask").mask('00000');
    }

    if ($(".cvv-mask").length > 0) {
        $(".cvv-mask").mask('999');
    }

    if ($(".cpf-mask").length > 0) {
        $(".cpf-mask").mask('999.999.999-99');
    }

    if ($(".phone-mask").length > 0) {
        $('.phone-mask').mask(SPMaskBehavior, spOptions);
    }


});
