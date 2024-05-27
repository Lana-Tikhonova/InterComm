$(document).ready(function () {

    // открытие моб. меню
    $('.menu_btn').on('click', function () {
        $('.header').toggleClass('active');
        $(this).toggleClass('active');
        $('html').toggleClass('locked');
    })

    // вопросы
    $(".faq_item").click(function () {
        $('.faq_item').not(this).removeClass('active').children('.faq_item_content').slideUp()
        $(this).toggleClass("active").children(".faq_item_content").slideToggle()
    })

    // скролл к секции
    $("[data-scroll]").on("click", function (e) {
        e.preventDefault();
        let href = $(this).attr("href");
        if ($(this)[0].closest('.mobile_menu')) {
            $('.header').removeClass('active');
            $('.menu_btn').removeClass('active');
            $('html').removeClass('locked');
        }
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, {
            easing: "linear"
        });

        return false;
    });

    // первый текстовый слайдре
    const textSlider = new Swiper(".text_slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        watchSlidesProgress: true,
        mousewheelControl: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    // все остальные слайдеры
    const slider = new Swiper(".slider", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        watchSlidesProgress: true,
        mousewheelControl: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            577: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
        },
    });

    // видео
    const players = Array.from(document.querySelectorAll('.player_video')).map(p => new Plyr(p, {
        autoplay: false,
    }));

    // движение линий при скролле
    lax.init()
    lax.addDriver(
        "scrollY",
        function () {
            return window.scrollY;
        }
    );

    lax.addElements(".line.right span", {
        scrollY: {
            translateX: [
                ["elInY", "elOutY"],
                {
                    500: [0, 300],
                    993: [0, 400]
                }
            ]
        },
    })
    lax.addElements(".line.left span", {
        scrollY: {
            translateX: [
                ["elInY", "elOutY"],
                {
                    500: [0, -300],
                    993: [0, -400]
                }
            ]
        },
    })

    var scene = document.querySelectorAll('.parallax');
    if (scene) {
        scene.forEach(element => {
            var parallaxInstance = new Parallax(element)
        });
    }

    // анимация
    let offset
    if ($(window).width() > 576) {
        offset = 100;
    } else {
        offset = 0;
    }
    AOS.init({
        easing: 'ease-in-out',
        delay: 100,
        once: true,
        duration: 800,
        offset: offset,
    });

});