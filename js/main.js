$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('a.button-up').fadeIn();
            $('a.button-up').addClass('button-up_visible');
        }
        else { $('a.button-up').fadeOut(400); }
    });
    $('a.button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(".header__content-link, .about__text-link").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() >= 190) {
            $('.header__menu-scroll-wrapper').addClass('stickytop');
            
        }
        else {
            $('.header__menu-scroll-wrapper').removeClass('stickytop');
           
        }
    });

    $('.menu__btn, .menu a, .overlay').on('click', function () {
        $('.header__menu-list').toggleClass('header__menu-list--active');
        $('.overlay').toggleClass('overlay--active');
        $('.menu__btn').toggleClass('menu__btn--active');
    });


    var mixer = mixitup('.gallery__content', {
        animation: {
            "duration": 200,
            "nudge": true,
            "reverseOut": false,
            "effects": "scale(0.01) translateX(20%)"
        }
    });

});





