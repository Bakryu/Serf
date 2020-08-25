$(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="">',
    asNavFor: '.slider__dots'
  });
  $('.slider__dots').slick({
    infinite: true,
    slidesToShow: 4,
    
    asNavFor: '.header__slider',
    fade: true,
  });
});
