import { getZero } from "./timer";


function slider({ container, slide, nextArrow, prevArrow, totalCoutnter, currentCounter, wrapper, flied }) {
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCoutnter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(flied),
        width = window.getComputedStyle(slidesWrapper).width,
        indicators = document.createElement('ol'),
        dots = [];

    slider.style.position = 'relative';
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        indicators.append(dot);
        dots.push(dot);
        if (i == 0) {
            dot.style.opacity = 1;
        }
    }

    let slideIndex = 1;
    current.textContent = getZero(`${slideIndex}`);
    total.textContent = `${slides.length}`;

    let offset = 0;

    function currentSlide(i) {
        if (i > slides.length) slideIndex = 1;
        if (i <= 0) slideIndex = slides.length;
        current.textContent = getZero(`${slideIndex}`);
    }

    function activeDot() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }
    function deleteNotDigits(string) {
        return +string.replace(/\D/g, '')
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    });



    next.addEventListener('click', () => {
        currentSlide(++slideIndex);
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        activeDot();

    });
    prev.addEventListener('click', () => {
        currentSlide(--slideIndex);
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        activeDot();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = parseInt(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            currentSlide(dot);
            activeDot();
        });

    });

}

export default slider;
