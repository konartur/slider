import Wrapper from "./wrapper";

describe("Wrapper", () => {
  let wrapper;

  beforeEach(() => {
    const stubContainer = document.createElement("div");
    const domWrapper = document.createElement("div");
    domWrapper.classList.add("slider-wrapper");
    stubContainer.appendChild(domWrapper);
    wrapper = new Wrapper(stubContainer);
  });

  test("create element and slides", () => {
    expect(wrapper.element).toBeTruthy();
    expect(wrapper.slides.length).toBe(0);
  });

  test("transform", () => {
    expect(wrapper.element.style.transform).toBeFalsy();
    Object.defineProperty(wrapper, "width", {
      get: jest.fn().mockReturnValue(100)
    });

    wrapper.transform(2);
    expect(wrapper.element.style.transform).toBe("translate3d(-200px, 0px, 0px)");
  });
});




