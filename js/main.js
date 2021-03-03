var carousel = function () {
    // logo slider
    $("#logo-slider").owlCarousel({
        center: true,
        item: 4,
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });
};
carousel();
