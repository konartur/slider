export default class Bullet {
  static classNames = {
    base: 'slider-pagination-bullet',
    active: 'slider-pagination-bullet-active'
  }

  constructor() {
    this.render();
  }

  render() {
    const bullet = document.createElement('span');
    bullet.classList.add(Bullet.classNames.base);

    this.template = bullet;
  }

  activate() {
    this.template.classList.add(Bullet.classNames.active);
  }

  deactivate() {
    this.template.classList.remove(Bullet.classNames.active);
  }
}
