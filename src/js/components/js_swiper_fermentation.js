export default function () {
    if (window.innerWidth <= 929) {
        const swiper = new Swiper('.js_swiper_fermentation', {
            // modules: [Navigation, Pagination],
            direction: 'horizontal',
            slidesPerView: 2,
            spaceBetween: 25,
            initialSlide: 0,
            loop: true,
            pagination: {
                el: '.swiper-pagination.fermentation__swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next.fermentation__swiper-btn_next',
                prevEl: '.swiper-button-prev.fermentation__swiper-btn_prev'
            },
            breakpoints: {
                610: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                }
            }
        });
    }
}
