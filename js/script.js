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
        // при завершении видео показываем кнопку "плэй" и обложку
        video.addEventListener('ended', () => {
            video.load();
            playBtn.classList.remove('hidden');
        });
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
                769: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1.2
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

    // карта
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("location__map", {
            center: [61.642203, 50.803134],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        });
        var myPlacemark = new ymaps.Placemark([61.642203, 50.803134], null, {
            preset: 'islands#blueDotIcon'
        });
        myMap.geoObjects.add(myPlacemark);
    }

    // бургер-меню
    const burgerOpen = document.querySelector('.header__burger');
    const burgerClose = document.querySelector('.header__close');
    const burgerMenu = document.querySelector('.header__nav');
    const menuLinks = document.querySelectorAll('.nav__link');
    const headerBtn = document.querySelector('.header__btn');
    if (burgerOpen && burgerClose && burgerMenu && menuLinks && headerBtn) {
        burgerOpen.addEventListener('click', function() {
            burgerMenu.classList.add('active');
        })
        burgerClose.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
        })
        menuLinks.forEach((menuLink) => {
            menuLink.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
            })
        })
        headerBtn.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
        })
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.header__nav, .header__burger')) {
                burgerMenu.classList.remove('active');
            }
        });
    }
})