import './slider.scss';
import Pagination from "./components/pagination/pagination";
import Wrapper from "./components/wrapper/wrapper";
import State from "./state";

export default class Slider {
  get allowSlideNext() {
    return this.state.activeIndex < this.wrapper.slides.length - 1;
  }

  get allowSlidePrevious() {
    return this.state.activeIndex > 0;
  }

  constructor(selector, options = {}) {
    this.container = document.querySelector(selector);

    if (!this.container) {
      throw new Error(`Cannot find pagination element by selector: ${selector}`);
    }

    this.state = new State();
    this.pagination = new Pagination(this.state);
    this.wrapper = new Wrapper(this.container);
    this.state.subscribe(activeIndex => {
      this.wrapper.transform(activeIndex);
      this.pagination.activate(activeIndex);
    });

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
          prevEl.addEventListener('click', this.slidePrevious.bind(this));
        }
      }
    }

    if ('pagination' in options) {
      this.pagination.render(this.container, this.wrapper.slides.length, options.pagination);
    }
  }

  slideNext() {
    if (!this.allowSlideNext) {
      return;
    }

    this.state.setActiveNext();
  }

  slidePrevious() {
    if (!this.allowSlidePrevious) {
      return;
    }

    this.state.setActivePrevious();
  }
}
