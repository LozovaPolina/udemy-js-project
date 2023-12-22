   const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;
    
    const slider = document.querySelector('.offer__slider'),
        sliderDotBox = document.createElement('div');
    
    sliderDotBox.classList.add('carousel-indicators');
    slider.append(sliderDotBox);
    slider.style.position = 'relative';

  
    function createDotElement() {
        let result = ``;
        for (let i = 0; i < slides.length; i++) {
            result += '<div class="dot"></div>';
        }
        sliderDotBox.innerHTML = `${result}`
    }
    createDotElement();

    const sliderDots = document.querySelectorAll('.dot');   

    let slideIndex = 1;
    current.textContent = getZero(`${slideIndex}`);
    total.textContent = `${slides.length}`;

    let offset = 0;

    function activeDot() {
        sliderDots.forEach(dot => dot.style.opacity = '.5');
        sliderDots[slideIndex - 1].style.opacity = 1;
    }
    activeDot()
    
    

    function currentSlide(i) {
        if (i > slides.length) slideIndex = 1;
        if (i <= 0) slideIndex = slides.length;
        current.textContent = getZero(`${slideIndex}`);
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
        if (offset == parseInt(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += parseInt(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        activeDot()
  
    });
    prev.addEventListener('click', () => {

        currentSlide(--slideIndex);
        if (offset == 0) {
            offset = parseInt(width) * (slides.length - 1);
        } else {
            offset -= parseInt(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        activeDot()
    });


//Novigation of sliders


    
    sliderDotBox.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('dot')) {
            let dotId = 0;
            sliderDots.forEach((item, i) => {
                if (target == item) {
                    slideIndex = i+1;
                    currentSlide(slideIndex);
                    dotId += i;
                    activeDot()
                };
            
            slidesField.style.transform = `translateX(-${dotId * parseInt(width)}px)`;
            });   
        }
    });

    
    // const slideImgs = document.querySelectorAll('.offer__slide'),
    //     sliderCounter = document.querySelector('.offer__slider-counter'),
    //     total = sliderCounter.querySelector('#total');

    // total.innerHTML = getZero(slideImgs.length);

    // function counterSlider(i=1) {
    //     const current = sliderCounter.querySelector('#current');
    //     current.innerHTML = getZero(i);
    // }
    // counterSlider();
    // function showSliderImg(i = 0) {
    //     slideImgs.forEach(img => {
    //         img.classList.add('hide');
    //     });
    //     slideImgs[i].classList.remove('hide');
    //     slideImgs[i].classList.add('show');
    // }
    // showSliderImg();

    // let i = 0;
    // sliderCounter.addEventListener('click', (e) => {
    //     const target = e.target;
    //     if (target.classList.contains('offer__slider-next')) {
    //         i++;
    //         if (i > (slideImgs.length - 1)) i = 0;
    //         showSliderImg(i)
    //         counterSlider(i + 1);
    //     } else if (target.classList.contains('offer__slider-prev')) {
    //         i--;
    //         if (i < 0) i = slideImgs.length - 1;
    //         showSliderImg(i);
    //         counterSlider(i + 1);
    //     }
    // });

    // const slides = document.querySelectorAll('.offer__slide'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current');
    // let slideIndex = 1;
    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }
    //     slides.forEach(item => item.style.display = 'none');
    //     slides[slideIndex - 1].style.display = 'block';
    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }
    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });















// const calculatorWrapper = document.querySelector('.calculating__field'),
//     genderItem = document.querySelectorAll('#gender .calculating__choose-item'),
//     physicalActivity = document.querySelectorAll('.calculating__choose_big .calculating__choose-item'),
//     calculatorResult = document.querySelector('.calculating__result');

// localStorage.setItem('gender', `female`);
// localStorage.setItem('activity', `small`);

// calculatorWrapper.addEventListener('click', (e) => {
//     const target = e.target;
//     if (target.matches('#gender .calculating__choose-item')) {
//         genderItem.forEach(element => {
//             if (element === target) {
//                 element.classList.add('calculating__choose-item_active');
//                 localStorage.setItem('gender', `${target.id}`);

//             } else {
//                 element.classList.remove('calculating__choose-item_active');
//             }
//         });
//     } else if (target.matches('.calculating__choose_big .calculating__choose-item')) {
//         physicalActivity.forEach(item => {
//             item.classList.remove('calculating__choose-item_active');
//             if (item === target) {
//                 item.classList.add('calculating__choose-item_active');
//                 localStorage.setItem('activity', `${target.id}`);
//             }
//         });
//     }
//     calcKcal();
// });
// calculatorWrapper.addEventListener('input', (e) => {
//     const target = e.target;
//     if (target.matches('#height')) {
//         localStorage.setItem('height', `${target.value}`)
//     } else if (target.matches('#weight')) {
//         localStorage.setItem('weight', `${target.value}`)
//     } else if (target.matches('#age')) {
//         localStorage.setItem('age', `${target.value}`)
//     }
//     if (typeof (target.value) !== 'number') {
//         return calculatorResult.innerHTML = `<span>0</span> ккал`
//     } else {
//         calcKcal();
//     }
// });

// function getIndexActivity() {
//     let activity = localStorage.getItem('activity');
//     if (activity == 'low') {
//         activity = activity.replace(/low/g, "1.2");
//         return activity;
//     } else if (activity == 'small') {
//         activity = activity.replace(/small/g, "1.375");
//         return activity;
//     } else if (activity == 'medium') {
//         activity = activity.replace(/medium/g, "1.55");
//         return activity;
//     } else if (activity == 'high') {
//         activity = activity.replace(/high/g, "1.725");
//         return activity;
//     }
// }
// function calcKcal() {
//     let result = '';
//     if (localStorage.getItem('gender')
//         && localStorage.getItem('height')
//         && localStorage.getItem('weight')
//         && localStorage.getItem('age')
//         && localStorage.getItem('activity')) {

//         const gender = localStorage.getItem('gender'),
//             height = localStorage.getItem('height'),
//             weight = localStorage.getItem('weight'),
//             age = localStorage.getItem('age'),
//             activity = getIndexActivity();
//         if (gender === 'male') {
//             result = Math.floor((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity);
//         } else {
//             result = Math.floor((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity);
//         }

//         if (typeof (result) === "number" && result) {
//             calculatorResult.innerHTML = `<span>${result}</span> ккал`
//         }
//     }
// }