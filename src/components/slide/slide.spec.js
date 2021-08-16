import Slide from './slide';

test('change width', () => {
  const mockNode = document.createElement('div');
  const slide = new Slide(mockNode);
  console.log(slide.element.style.width);
})
