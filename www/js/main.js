
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
});