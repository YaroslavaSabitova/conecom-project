// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function () {
    if (window.innerWidth <= 929) {
        const swiper = new Swiper('.js_advantages-swiper', {
            // modules: [Navigation, Pagination],
            direction: 'horizontal',
            slidesPerView: 2,
            spaceBetween: 25,
            initialSlide: 0,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
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
