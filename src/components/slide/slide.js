import './slide.scss';

export default class Slide {
  constructor(element) {
    this.element = element;
  }

  setWidth(width) {
    this.element.style.width = `${width}px`;
  }
}
