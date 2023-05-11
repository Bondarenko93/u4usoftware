var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 320px
        320: {
            grid: {
                rows: 1,
            },
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            grid: {
                rows: 1,
            },
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        750: {
            grid: {
                rows: 1,
            },
            slidesPerView: 2,
            spaceBetween: 40
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1441: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }

});