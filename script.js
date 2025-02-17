document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
        },
        on: {
            init: function () {
                console.log('スライダー初期化完了');
            },
        }
    });

    console.log('スライダーの枚数:', swiper.slides.length);
    
    document.querySelector('.swiper-button-next').addEventListener('click', () => {
        swiper.slideNext();
    });
    
    document.querySelector('.swiper-button-prev').addEventListener('click', () => {
        swiper.slidePrev();
    });

    const swiperContainer = document.querySelector('.swiper-container');
    swiperContainer.addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
    });

    swiperContainer.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
    });

    // トップに戻るボタンの制御
    const toTopButton = document.getElementById('to-top');
    
    // スクロール時の表示制御
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            toTopButton.classList.add('visible');
        } else {
            toTopButton.classList.remove('visible');
        }
    });
    
    // クリック時の動作
    toTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 