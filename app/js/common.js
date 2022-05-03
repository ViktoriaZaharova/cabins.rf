$('.clients-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
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


$('.form-search input').on('keyup change', function() {
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
    $(this).addClass('trigger');
    $('.header-bottom').css('display','flex');
});

