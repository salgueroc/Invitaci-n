/*==================================================
    INVITACIÓN JHON & ADRIANA
    JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      CARRUSEL
    =========================================*/

    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    const dots = document.querySelectorAll(".slider-dots span");

    if (!slides || images.length === 0) return;

    let current = 0;
    const total = images.length;

    function updateSlider() {

        slides.style.transform =
            `translateX(-${current * 100}%)`;

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === current
            );

        });

    }

    function nextSlide() {

        current++;

        if (current >= total) {

            current = 0;

        }

        updateSlider();

    }

    let autoSlide = setInterval(nextSlide, 4500);

    /*=========================================
      PUNTOS INDICADORES
    =========================================*/

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            current = index;

            updateSlider();

            clearInterval(autoSlide);

            autoSlide = setInterval(nextSlide, 4500);

        });

    });

    /*=========================================
      DESLIZAMIENTO TÁCTIL
    =========================================*/

    let startX = 0;
    let endX = 0;

    slides.addEventListener("touchstart", e => {

        startX = e.touches[0].clientX;

    });

    slides.addEventListener("touchend", e => {

        endX = e.changedTouches[0].clientX;

        const distance = startX - endX;

        if (distance > 50) {

            current++;

        }

        if (distance < -50) {

            current--;

        }

        if (current >= total) {

            current = 0;

        }

        if (current < 0) {

            current = total - 1;

        }

        updateSlider();

        clearInterval(autoSlide);

        autoSlide = setInterval(nextSlide, 4500);

    });

    /*=========================================
      INICIALIZAR
    =========================================*/

    updateSlider();

});
