$(window).ready(function () {
    $('.menuIcon').on('click', function () {
        $(this).addClass('active');
        $('.headerNav').addClass('active')
    });
    $('.menuClose').on('click', function () {
        $('.headerNav').removeClass('active');
        $('.menuIcon').removeClass('active')
    });

    $('.banner-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        imagesLoaded: true,
        prevNextButtons: false,
    });

    if ($(window).width() < 768){
        $('.review-carousel').removeClass('row').flickity({
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            imagesLoaded: true,
            prevNextButtons: false,
        });
        $('.olympics-carousel').flickity({
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            imagesLoaded: true,
            prevNextButtons: false,
        });
        $('.pilatesCanHelp__images').flickity({
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            imagesLoaded: true,
            prevNextButtons: false,
        });
    }

    $('select').niceSelect();
});