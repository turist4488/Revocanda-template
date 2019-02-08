
jQuery().ready(function ($) {
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.slick-list',
        dotsClass: 'slider-dashes' // створив свій клас для кнопок слайдера '.slider-dashes' в файлі main.scss
    });

    //відображення модальних вікон
    $('.speakers [data-target*="speaker"]').click(function () {
        //alert($(`.speakers [id=${this.getAttribute('data-target')}]`));
      $(`.modal[id=${this.getAttribute('data-target')}]`).modal('show');
    });

    $('.single-item').slick({
        speed: 1000
    });

    // очистив кнопки які slick генерить сам
    $('.slider-dashes button').empty();
    $('.single-item button').empty();
    $('.single-item button.slick-prev').text('<');
    $('.single-item button.slick-next').text('>');


    if ($(window).width() <= 640) {
        let langButton = $('nav .header__nav-item:last-child');
        langButton.remove();

        $(langButton).css('list-style', 'none');
        langButton.appendTo($('.header .nav-sm-buttons'));
        $('.header .nav-sm-buttons').css('display', 'block');

        let ulOld = $('#collapsibleNavbar');
        ulOld.remove();
        ulOld.css({
            'display': 'none',
        });
        $(ulOld).removeClass('header__nav');
        $(ulOld).addClass('dropdown-list');

        $('.header .container.row').css('border-bottom', '1px solid #1874cd');
        (ulOld).insertAfter($('.header .container.row'));

        $('.navbar-toggler').css({display: 'inline-block'});
        $('.navbar-toggler').click(function () {
            $('#collapsibleNavbar').slideToggle(200);
        })
    }
});