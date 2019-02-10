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

    $('#navbar-toggler-btn').click(function () {
        $('#collapsibleNavbar').slideToggle(400);
    });

    function createDropdownForm() {
        let formListDrop = $('#form-list-dropdown');
        let dropDownRows = $('.dropdown-rows .form-group');

        dropDownRows.appendTo(formListDrop);
        formListDrop.hide();
        $('.dropdown-rows').remove();

        let formDropToggle = $('.form-row-toggle');
        formDropToggle.show();

        $(formDropToggle).click(function () {
            formListDrop.slideToggle(800);
        });
    }
});