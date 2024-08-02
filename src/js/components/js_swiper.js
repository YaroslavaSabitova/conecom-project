// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function () {
    if (window.innerWidth <= 929) {
        const swiper = new Swiper('.js_swiper_advantages', {
            // modules: [Navigation, Pagination],
            direction: 'horizontal',
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 25,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }
}
