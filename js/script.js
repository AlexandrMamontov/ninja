document.addEventListener('DOMContentLoaded', function() {
    // видео
    const video = document.getElementById('hero-video');
    const playBtn = document.querySelector('.hero__play');
    if (video && playBtn) {
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playBtn.classList.add('hidden');
            }
            else {
                video.pause();
                playBtn.classList.remove('hidden');
            }
        })
    }

    // слайдер "Трассы"
    const sliderTracks = document.querySelector('.tracks__slider');
    if (sliderTracks) {
        new Swiper(sliderTracks, {
            navigation: {
                nextEl: '.tracks__next',
                prevEl: '.tracks__prev',
            },
            spaceBetween: 20,
            slidesPerView: 2,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                576: {
                    slidesPerView: 1.5
                },
                0: {
                    slidesPerView: 1
                }
            }
        })
    }

    // слайдер "Тарифы"
    new Scroll('.rates__container', {})

    // аккордеон "Вопрос-ответ"
    const items = document.querySelectorAll('.questions__item');
    items.forEach((item) => {
        const header = item.querySelector('.questions__header');
        const body = item.querySelector('.questions__block');
        header.addEventListener('click', function() {
            header.classList.toggle('active');
            body.classList.toggle('active');
        })
    })
})