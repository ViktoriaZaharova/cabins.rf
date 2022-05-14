$('.clients-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.production-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.object-gallery-max').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true
});

$('.object-gallery-preview').slick({
    slidesToShow: 3,
    focusOnSelect: true,
    asNavFor: '.object-gallery-max',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }

    ]
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 52) {
        $('header').addClass('fixed');
        $('body').addClass('header-fixed');
    } else {
        $('header').removeClass('fixed');
        $('body').removeClass('header-fixed');
    }
});


$('.form-search input').on('keyup change', function () {
    if (this.value.length > 0) {
        $('.search-dropdown').fadeIn();
    } else {
        $('.search-dropdown').fadeOut();
    }
});


$('.location-links').on('click', function (e) {
    e.preventDefault();
    $('.location-dropdown').fadeToggle();
});

$('.location-dropdown__close').on('click', function (e) {
    e.preventDefault();
    $('.location-dropdown').fadeOut();
});

$('.btn-burger').on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        content = $('.header-bottom');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');

        content.css('display', 'flex');
    } else {
        $this.removeClass('trigger');

        content.css('display', 'none');
    }
});


// показать карточку товара по наведению в зависимости от значениея data-tab
$(document).ready(function () {
    $(".js-tab-trigger").hover(function () {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

        $('.js-tab-trigger.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    })
});


// show block all
$('.certificates .btn-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).prev('.certificate-wrapper-content').find('.item:hidden').slice(0, 5).slideDown();

    var onBlock = $(this).prev('.certificate-wrapper-content').find('.item:hidden').length;
    if (onBlock <= 0) {
        $(this).hide();
    }
});


$('.video-reviews-wrapper .btn-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.video-reviews-wrapper').find('.video-reviews-col:hidden').slice(0, 2).slideDown();

    var onBlock = $(this).parents('.video-reviews-wrapper').find('.video-reviews-col:hidden').length;
    if (onBlock <= 0) {
        $(this).hide();
    }
});

$(".go_to").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top,
        header = $('header').height();

    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({scrollTop: top - header - 10}, 500);
});

$('.list-options').each(function () {
    $(this).find('li').click(function () {
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
    });
});