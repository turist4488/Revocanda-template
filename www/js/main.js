
jQuery().ready(function ($) {
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.slick-list',
        dotsClass: 'slider-dashes' // створив свій клас для кнопок слайдера '.slider-dashes' в файлі main.scss
    });
    $('.single-item').slick({
        speed: 1000
    });

    // очистив кнопки які slick генерить сам
    $('.slider-dashes button').empty();
    $('.single-item button').empty();
    $('.single-item button.slick-prev').text('<');
    $('.single-item button.slick-next').text('>');
});