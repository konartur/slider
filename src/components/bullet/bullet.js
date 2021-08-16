import classNames from './bullet.module.scss';

export default class Bullet {
  constructor() {
    this.render();
  }

  render() {
    const bullet = document.createElement('span');
    bullet.classList.add(classNames.sliderPaginationBullet);

    this.template = bullet;
  }

  activate() {
    this.template.classList.add(classNames.sliderPaginationBulletActive);
  }

  deactivate() {
    this.template.classList.remove(classNames.sliderPaginationBulletActive);
  }
}
