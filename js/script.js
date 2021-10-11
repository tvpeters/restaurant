'use strict';

// swiper

let swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    centerInsufficientSlides: true,
    centeredSlides: true,
    // centeredSlidesBounds: true,
    createElements: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// menu

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});