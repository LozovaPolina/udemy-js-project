
import tabs from './modules/tabs';
import timer from './modules/timer';
import slider from './modules/slider';
import modal from './modules/modal';
import forms from './modules/forms';
import cookies from './modules/cookies';
import cards from './modules/cards';
import calculator from './modules/calculator';
import { openModal } from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2024-1-01');
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCoutnter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        flied: '.offer__slider-inner'

    });
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    cookies();
    cards();
    calculator();

});