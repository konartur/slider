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

  setActiveNext() {
    const nextIndex = this.activeIndex + 1;
    this.setActive(nextIndex);
  }

  setActivePrevious() {
    const previousIndex = this.activeIndex - 1;
    this.setActive(previousIndex);
  }

  subscribe(callback) {
    this.callback = callback;
  }
}
