export default class State {
  constructor() {
    this.activeIndex = 0;
  }

  setActive(index) {
    this.activeIndex = index;

    if (typeof this.callback === 'function') {
      this.callback(this.activeIndex);
    }
  }

  subscribe(callback) {
    this.callback = callback;
  }
}
