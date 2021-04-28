$('.comments__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: '<img src="../img/arrow-right.svg" alt="arrow">',
    prevArrow: '<img src="../img/arrow.svg" alt="arrow">',
    responsive: [
        {
            breakpoint: 1310,
            settings: {
                slidesToShow: 2
            },
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

