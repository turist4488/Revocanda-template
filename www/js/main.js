jQuery().ready(function ($) {

    //FOR SPEAKERS SLIDER
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'slider-dashes', // створив свій клас для кнопок слайдера '.slider-dashes' в файлі main.scss
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //SHOWS MODAL WINDOW
    $('.speakers [data-target*="speaker"]').click(function () {
      $(`.modal[id=${this.getAttribute('data-target')}]`).modal('show');
    });

    let singleSlider = $('.experts-notes__slider.single-item');
        singleSlider.slick({
        speed: 1000,
        dots: false
    });

    // clears buttons created by default in slick
    $('.slider-dashes button').empty();
    $('.single-item button').empty();
    $('.single-item button.slick-prev').text('<');
    $('.single-item button.slick-next').text('>');

    //DROPDOWN FOR HEADER MENU
    $('#navbar-toggler-btn').click(function () {
        $('#collapsibleNavbar').slideToggle(400);
    });

    //DROPDOWN FOR FORM INPUTS
    $('.form-row-toggle').click(function () {
        $('#form-list-dropdown').slideToggle(600);
    });
});