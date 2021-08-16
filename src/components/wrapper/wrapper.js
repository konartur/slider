import './wrapper.scss';

export default class Wrapper {
  get width() {
    return this.element.clientWidth;
  }

  constructor(container) {
    this.element = container.querySelector('.slider-wrapper');

    if (!this.element) {
      throw new Error('Cannot find wrapper in container');
    }
  }

  transform(activeIndex) {
    this.element.style.transform = `translate3d(-${this.width * activeIndex}px, 0px, 0px)`;
  }
}
