import "./wrapper.scss";
import Slide from "../slide/slide";

export default class Wrapper {
  get width() {
    return this.element.clientWidth;
  }

  constructor(container) {
    this.element = container.querySelector(".slider-wrapper");

    if (!this.element) {
      throw new Error("Cannot find wrapper in container");
    }

    this.slides = Array.from(this.element.querySelectorAll(".slider-slide")).map(node => this.createSlide(node));
  }

  transform(activeIndex) {
    this.element.style.transform = `translate3d(-${this.width * activeIndex}px, 0px, 0px)`;
  }

  createSlide(node) {
    const slide = new Slide(node);
    slide.setWidth(this.width);
    return slide;
  }
}
