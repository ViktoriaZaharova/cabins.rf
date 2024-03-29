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
    prevArrow: '<button type="button" class="slick-prev slick-prev-blue"></button>',
    nextArrow: '<button type="button" class="slick-next slick-next-blue"></button>',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }

    ]
});

$('.category-card-slider-image').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slick-prev-blue"></button>',
    nextArrow: '<button type="button" class="slick-next slick-next-blue"></button>',
});

$('.projects-slider').slick({
    slidesToShow: 5,
    // centerMode: true,
    // variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev slick-prev-blue"></button>',
    nextArrow: '<button type="button" class="slick-next slick-next-blue"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// fixed header
$(window).scroll(function () {
    if ($(this).scrollTop() > 52) {
        $('header').addClass('fixed');
        $('body').addClass('header-fixed');

    } else {
        $('header').removeClass('fixed');
        $('body').removeClass('header-fixed');

    }
});


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).width() > 768) {

            if ($(this).scrollTop() > 52) {
                $('.header-bottom').css('display', 'none');
            } else {
                $('.header-bottom').css('display', 'flex');
            }

        }
    });
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

// mobile menu
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

// animate scroll
$(".go_to").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),
        top = $(id).offset().top,
        header = $('header').height();

    $('body,html').animate({scrollTop: top - header - 10}, 500);
});


$('.list-options').each(function () {
    $(this).find('li').click(function () {
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
    });
});


// filter catalog
$(document).ready(function () {
    $(".filter-category-item").click(function () {
        var r = $(this).data("type");

        $(".filter-category-item").removeClass("active");
        $(this).addClass("active");
        $(".filter-checked").removeClass("active")
        $('.' + r).addClass("active");
    });
});

$('.filter-checked .filter-checked-label input[type=radio]:checked+span').addClass('active');
$('.filter-checked .filter-checked-label input[type=radio]:checked+span').append("<div class='remove-filter'>✕</div>");
$('.filter-checked .filter-checked-label input[type=radio]:checked').parent().addClass('click');


$('.filter-checked .filter-checked-label input[type=radio]').change(function () {
    $('.filter-checked .filter-checked-label input[type=radio]+span').removeClass('active');
    $('.filter-checked .filter-checked-label input[type=radio]:checked+span').addClass('active');
    $('.filter-checked .filter-checked-label input[type=radio]+span>.remove-filter').remove();
    $('.filter-checked .filter-checked-label input[type=radio]:checked+span').append("<div class='remove-filter'>✕</div>");
    $('.remove-filter').click(function () {
        $(this).remove();
        $('.filter-checked .filter-checked-label input[type=radio]:checked+span').removeClass('active');
        setTimeout(function () {
            mSearch2.reset();
            $('.filter-checked-label').removeClass('click');
        }, 100);
    });
});

$('.filter-checked-label').click(function () {
    $('.filter-checked-label').removeClass('click');
    $(this).addClass('click');
});

$('.remove-filter').click(function () {
    $(this).remove();
    $('.filter-checked .filter-checked-label input[type=radio]:checked+span').removeClass('active');
    setTimeout(function () {
        mSearch2.reset();
        $('.filter-checked-label').removeClass('click');
    }, 100);
});

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count + 'шт');
    $input.change();
    return false;
});
$('.up').on("click", function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1 + 'шт');
    $input.change();
    return false;
});

$('.calculate-info-item').on('click', function () {
    $('.calculate-info-item').removeClass('active');
    $(this).addClass('active');
});

$('.btn-add-option').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.option-equipment').find('.hidden-block').fadeIn();
    $(this).fadeOut();
});

// фиксирование формы при скролле
$(document).ready(function () {
    if ($(window).width() > 992) {
        if ($('.fixed-block-scroll').length > 0) {
            var offset = $('.fixed-block-scroll').offset();
            var offsetTop = parseInt(offset.top + 10);
            // var footerHeight = $('footer').height() + $('.clients').height();
            var footerHeight = $('footer').height();
            var bannerHeight = $('.fixed-block-scroll').height();

            $(window).scroll(function () {


                var scroll = $(window).scrollTop();
                var stopHeight = ($(document).height() - bannerHeight) - (footerHeight + bannerHeight / 2);

                //Начало движения
                if (scroll > offsetTop) {
                    $('.fixed-block-scroll').addClass('fix');
                } else {
                    $('.fixed-block-scroll').removeClass('fix');
                }

                //Остановка движения
                if (scroll > stopHeight) {
                    $('.fixed-block-scroll').addClass('stop');
                } else {
                    $('.fixed-block-scroll').removeClass('stop').css('top', 70);
                }
            });
        }

    }
});



// выделить область таблицы по клику на комплектацию в зависимости от значениея data-tab
$(document).ready(function () {
    $(".js-tab-equipment").click(function () {
        var id = $(this).attr('data-equipment'),
            content = $('.js-tab-equipment-content[data-equipment="' + id + '"]');

        $('.js-tab-equipment.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-equipment-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    })
});




