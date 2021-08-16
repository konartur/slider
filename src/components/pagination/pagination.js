import Bullet from "../bullet/bullet";
import "./pagination.scss";

export default class Pagination {
  constructor(state) {
    this.bullets = [];
    this.state = state;
  }

  render(container, bulletCount, options) {
    this.element = container.querySelector(options.el);

    if (!this.element) {
      throw new Error(`Cannot find pagination element by selector: ${options.el}`);
    }

    this.clickable = 'clickable' in options ? options.clickable : false;
    this.bullets = Array.from({ length: bulletCount }, (_, index) => new Bullet(this.state, {
      clickable: this.clickable,
      index
    }));
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
