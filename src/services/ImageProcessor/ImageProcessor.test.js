import { TILE_SIZE, GAP_SIZE } from '../../global/constants';
import { ImageProcessor } from './ImageProcessor';
import input from '../../fixtures/input.jpg';

describe.only('ImageProcessor', () => {
  let imageProcessor;

  beforeEach(() => {
    imageProcessor = new ImageProcessor();
  });

  it('creates placeholder canvas', () => {
    const placeholderCanvas = imageProcessor.getPlaceholderCanvas(
      TILE_SIZE * 3 + GAP_SIZE * 2,
      TILE_SIZE,
      TILE_SIZE,
      GAP_SIZE
    );
    expect(placeholderCanvas.toDataURL()).toMatchSnapshot();
  });
});
