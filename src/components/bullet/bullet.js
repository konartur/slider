import classNames from './bullet.module.scss';

export default class Bullet {
  constructor(state, { clickable, index }) {
    this.state = state;
    this.clickable = clickable;
    this.isActive = this.state.activeIndex === index;
    this.index = index;
    this.template = this.render();
  }

  render() {
    const bullet = document.createElement('span');
    bullet.classList.add(classNames.sliderPaginationBullet);

    if (this.clickable) {
      bullet.classList.add(classNames.sliderPaginationBulletClickable);
    }

    if (this.isActive) {
      bullet.classList.add(classNames.sliderPaginationBulletActive);
    }

    bullet.addEventListener('click', this.clickHandler.bind(this));

    return bullet;
  }

  clickHandler() {
    if (!this.clickable) {
      return;
    }

    this.state.setActive(this.index);
  }

  activate() {
    this.template.classList.add(classNames.sliderPaginationBulletActive);
    this.isActive = true;
  }

  deactivate() {
    this.template.classList.remove(classNames.sliderPaginationBulletActive);
    this.isActive = false;
  }
}
