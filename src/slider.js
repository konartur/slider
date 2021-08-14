import './slider.scss';

export default class Slider {
  constructor(selector) {
    this.container = document.querySelector(selector);

    if (!this.container) {
      throw new Error(`Not found node by selector: ${selector}`);
    }

    this.wrapper = this.container.querySelector('.slider-wrapper');
    const wrapperWidth = this.wrapper.clientWidth;

    this.sliders = this.wrapper.querySelectorAll('.slider-slide');

    // eslint-disable-next-line no-restricted-syntax
    for (const slider of this.sliders) {
      slider.style.width = `${wrapperWidth}px`;
    }

    let currentSlide = 0;

    this.wrapper.addEventListener('click', () => {
      currentSlide += 1;
      this.wrapper.style.transform = `translate3d(-${wrapperWidth * currentSlide}px, 0px, 0px)`;
    });
  }
}
