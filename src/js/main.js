$('.rent-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nav: true,
    // autoplay: true,
    responsive: [
        {
            breakpoint: 1367,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: "unslick"
            // settings: {
            //     slidesToShow: 2,
            // }
        }
    ]
});

$('.offers-list').slick({
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    // autoplay: true,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

// $('.advantages-list').slick({
//     // autoplay: true,
//     slidesToShow: 1,
//     dots: true,
//     mobileFirst: true,
//     // centerMode: true,
//     responsive: [
//         {
//             breakpoint: 767,
//             settings: {
//                 slidesToShow: 4,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: "unslick",
//         },
//     ]
// });



$(document).ready(function () {
    $('.advantages-list').slick({
        // autoplay: true,
        slidesToShow: 1,
        dots: true,
        mobileFirst: true,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: "unslick",
            },
        ]
    });

    $(window).on('resize', function () {
        $('.advantages-list').slick({
            // autoplay: true,
            slidesToShow: 1,
            dots: true,
            mobileFirst: true,
            // centerMode: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: "unslick",
                },
            ]
        });
    });

});



$(document).ready(function () {
    $(function () {
        $('a[href^="#"]').on('click', function (evt) {
            evt.preventDefault();
            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            $('html, body').animate({ scrollTop: dn }, 1000);
        });
    });

    // initial mycustom scroll
    $(window).on('load', function () {
        $('.mycustom-scroll').mCustomScrollbar({
        });
    })

    // mobile-menu
    $('.mobile-menu').on('click', function () {
        $(this).toggleClass('active');
    })

    // about btn-click
    $('#btn-click').on('click', function () {
        $(this).toggleClass('active');
        $('.about-wrapper__hidden').slideToggle();
    })

    // footer-mobile
    $('.footer__mobile-menu').on('click', function () {
        $(this).toggleClass('current');
        $('.main-menu--footer').slideToggle();
    });

    // rent-card show-more
    $('.rent-card__show').on('click', function () {
        $(this).toggleClass('current');
        $('.rent-card-list__list').toggleClass('active');
    })
});

$(function () {
    var tab = $('.rent-cards > div')
    tab.hide().filter(':first').show()

    // Клики по вкладкам.
    $('.rent-list .rent-list__item a').click(function () {
        tab.hide()
        tab.filter(this.hash).show()
        $('.rent-list .rent-list__item a').removeClass('active')
        $(this).addClass('active')

        if ($('.rent-card__slider').hasClass('slick-initialized')) {
            $('.rent-card__slider').slick('unslick')
        }

        // $('.rent-card__slider').slick({
        //     slidesToShow: 1,
        //     arrows: true,
        // })

        $('.rent-card__slider').slick({
            slidesToShow: 1,
            dots: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        });

        return false
    })
        .filter(':first')
        .click()
})