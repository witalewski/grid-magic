import { TILE_SIZE, GAP_SIZE } from './global/constants';
import { AppState } from './AppState';
import { ImageProcessor } from './services';

describe('AppState', () => {
  let appState;

  beforeEach(() => {
    appState = new AppState(new ImageProcessor());
  });

  it('creates placeholder canvas', () => {
    expect(appState.previewCanvas.toDataURL()).toMatchSnapshot();
  });
});
