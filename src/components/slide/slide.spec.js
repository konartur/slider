import Slide from "./slide";

test("change width", () => {
  const mockNode = document.createElement("div");
  const slide = new Slide(mockNode);
  const mockWidth = 120;

  Element.prototype.getBoundingClientRect = jest.fn(() => ({
    width: mockWidth,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }));

  console.log(mockNode.style.width)

  slide.setWidth(`${mockWidth}px`);
  expect(slide.element.getBoundingClientRect().width).toBe(mockWidth);
});
