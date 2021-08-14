import styles from './slider.scss';

export default class Slider {
  constructor(selector) {
    this.node = document.querySelector(selector);

    if (!this.node) {
      throw new Error(`Not found node by selector: ${selector}`);
    }

    this.node.classList.add(styles.slider);
  }
}
