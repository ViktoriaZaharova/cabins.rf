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

$('.btn-burger').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $('.header-bottom');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');

        content.css('display','flex');
    } else {
        $this.removeClass('trigger');

        content.css('display','none');
    }
});


// показать карточку товара по наведению в зависимости от значениея data-tab
$(document).ready(function () {
    $(".js-tab-trigger").hover(function () {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="'+ id +'"]');

        $('.js-tab-trigger.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    })
});


// show block all
$('.btn-toggle').on('click', function (e) {
    e.preventDefault();
    $('.certificate-wrapper-content .item:hidden').slice(0, 10).slideDown();

    var onBlock = $('.certificate-wrapper-content .item:hidden').length;
    if(onBlock <= 0) {
        $('.btn-toggle').hide();
    }
});