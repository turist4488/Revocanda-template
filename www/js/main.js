
jQuery().ready(function ($) {
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.slick-list',
        dotsClass: 'slider-dashes' // створив свій клас для кнопок слайдера '.slider-dashes' в файлі main.scss
    });

    // очистив кнопки які slick генерить сам
    $('.slider-dashes button').empty();

});