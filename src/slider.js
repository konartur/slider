import './slider.scss';
import Pagination from "./components/pagination/pagination";
import State from "./state";

export default class Slider {
  get wrapperWidth() {
    return this.wrapper.clientWidth;
  }

  get allowSlideNext() {
    return this.state.activeIndex < this.sliders.length - 1;
  }

  get allowSlidePrev() {
    return this.state.activeIndex > 0;
  }

  constructor(selector, options = {}) {
    this.container = document.querySelector(selector);

    if (!this.container) {
      throw new Error(`Cannot find pagination element by selector: ${selector}`);
    }

    this.pagination = new Pagination();
    this.state = new State();
    this.state.subscribe(activeIndex => {
      this.pagination.activate(activeIndex);
    });

    this.wrapper = this.container.querySelector('.slider-wrapper');

    this.sliders = this.wrapper.querySelectorAll('.slider-slide');


    // eslint-disable-next-line no-restricted-syntax
    for (const slider of this.sliders) {
      slider.style.width = `${this.wrapperWidth}px`;
    }

    if ('navigation' in options) {
      if ('nextEl' in options.navigation) {
        const nextEl = this.container.querySelector(options.navigation.nextEl);
        if (nextEl) {
          nextEl.addEventListener('click', this.slideNext.bind(this));
        }
      }

      if ('prevEl' in options.navigation) {
        const prevEl = this.container.querySelector(options.navigation.prevEl);
        if (prevEl) {
          prevEl.addEventListener('click', this.slidePrev.bind(this));
        }
      }
    }

    if ('pagination' in options) {
      if ('el' in options.pagination) {
        this.pagination.render(this.container, options.pagination.el, this.sliders.length);
      }
    }
  }

  slideNext() {
    if (!this.allowSlideNext) {
      return;
    }

    const nextIndex = this.state.activeIndex + 1;
    this.wrapper.style.transform = `translate3d(-${this.wrapperWidth * nextIndex}px, 0px, 0px)`;
    this.state.setActive(nextIndex);
  }

  slidePrev() {
    if (!this.allowSlidePrev) {
      return;
    }

    const prevIndex = this.state.activeIndex - 1;
    this.wrapper.style.transform = `translate3d(-${this.wrapperWidth * prevIndex}px, 0px, 0px)`;
    this.state.setActive(prevIndex);
  }
}
