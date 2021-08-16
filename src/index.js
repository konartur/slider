import Slider from './slider';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-new
  new Slider('.slider-container', {
    pagination: {
      el: '.slider-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev'
    }
  });
});
