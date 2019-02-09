
jQuery().ready(function ($) {
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.slick-list',
        dotsClass: 'slider-dashes', // створив свій клас для кнопок слайдера '.slider-dashes' в файлі main.scss
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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

    //відображення модальних вікон
    $('.speakers [data-target*="speaker"]').click(function () {
      $(`.modal[id=${this.getAttribute('data-target')}]`).modal('show');
    });

    $('.single-item').slick({
        speed: 1000,
        dots: false,
        appendDots: false,
    });

    // очистив кнопки які slick генерить сам
    $('.slider-dashes button').empty();
    $('.single-item button').empty();
    $('.single-item button.slick-prev').text('<');
    $('.single-item button.slick-next').text('>');

    function createNewNavBtns() {
        let langButton = $('nav .header__nav-item:last-child');
        langButton.remove();
        $(langButton).css('list-style', 'none');

        let navButtons = $('.header .nav-sm-buttons');
        langButton.appendTo(navButtons);
        $(navButtons).css('display', 'block');
    }

    function createDropdownNav() {
        let ulOld = $('#collapsibleNavbar');
        ulOld.remove();
        ulOld.css({
            'display': 'none',
        });
        $(ulOld).removeClass('header__nav');
        $(ulOld).addClass('dropdown-list');

        let headerContainerRow = $('.header .container.row');

        $(headerContainerRow).css('border-bottom', '1px solid #1874cd');
        (ulOld).insertAfter(headerContainerRow);
    }

    if ($(window).width() <= 640) {

        createNewNavBtns();

        createDropdownNav();

        //BUTTON FOR MENU DROPDOWN
        let navTogglerBtn = $('.navbar-toggler');
        $(navTogglerBtn).css({display: 'inline-block'});
        $(navTogglerBtn).click(function () {
            $('#collapsibleNavbar').slideToggle(400);
        });

        //REDUCING TEXT INSIDE THE SLIDER FOR BEAUTY
        $('.experts-notes__text').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
            'Adipisci alias amet animi autem cum debitis, dicta distinctio\n' +
            'ea, excepturi facere fugiat incidunt, laborum maiores nemo\n' +
            'nostrum numquam odit omnis perspiciatis!');

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