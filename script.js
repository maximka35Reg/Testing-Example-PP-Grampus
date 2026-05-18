 document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 'auto', // ширина слайда
        spaceBetween: 30, // расстояние между слайдами
        loop: false, // зацикливание
        slidesPerGroup: 5, // количество слайдов прокрутки
        slidesPerGroupAuto: false, // автоматическое определение слайдов в группе
        
        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },
        
        pagination: {
            el: '.swiper-control-pagination', 
            clickable: true, // возможность клика по точкам
            bulletClass: 'point', // класс обычной точки
            bulletActiveClass: 'active', // класс активной точки
        },

        autoplay: {
            delay: 5000, // интервал
            disableOnInteraction: false, // отключение при взаимодействии со слайдером
        },

        speed: 1000, // скорость прокрутки

        on: { // события слайдера
            init: function() { //инициализация
                updateButtons(this);
            },
            slideChange: function() { // смена слайда
                updateButtons(this);
            }
        }
    });

    function updateButtons(swiper) {
        const prev = document.querySelector('.prev-btn');
        const next = document.querySelector('.next-btn');
        
        if (swiper.isBeginning)
            prev.classList.remove('active');
        else
            prev.classList.add('active');
        
        if (swiper.isEnd)
            next.classList.remove('active');
        else
            next.classList.add('active');
    }



    // Обработчик кнопок ответов на вопросы
    document.querySelectorAll('.answer-question').forEach(question => {
        question.addEventListener('click', function() {
            if (question.classList.contains('active')) {
                question.classList.remove('active');
            }
            else {
                document.querySelectorAll('.answer-question').forEach(q => q.classList.remove('active'));
                question.classList.add('active');
            }
        });
    });
});


