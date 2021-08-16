import Bullet from "./bullet";

export default class Pagination {
  constructor() {
    this.bullets = [];
  }

  render(container, selector, bulletCount) {
    this.element = container.querySelector(selector);

    if (!this.element) {
      throw new Error(`Cannot find pagination element by selector: ${selector}`);
    }

    this.bullets = Array.from({ length: bulletCount }, () => new Bullet());
    this.bullets.forEach(bullet => this.element.appendChild(bullet.template));
  }

  activate(activeIndex) {
    this.bullets.forEach((bullet, index) => {
      if (activeIndex === index) {
        bullet.activate();
      } else {
        bullet.deactivate();
      }
    });
  }
}
