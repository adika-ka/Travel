new Swiper('.destinations-slider',{
    navigation:{
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    slidesPerView: 1.75,
    spaceBetween: 60,
    centeredSlides: true,
    initialSlide: 1.75,
    loop: true,
    breakpoints:{
        320: {
            slidesPerView: 1,
        },
        769:{
            slidesPerView: 1.75,
        }
    }
});
