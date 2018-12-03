import { observable, action, computed } from 'mobx';
export const TILE_SIZE = 1080;
export const GAP_SIZE = 10;

export class AppState {
  constructor(imageProcessor) {
    this.imageProcessor = imageProcessor;
  }
  @observable tileSize = TILE_SIZE;
  @observable gapSize = GAP_SIZE;
  @observable overlayText = '';
  @computed get width() {
    return this.tileSize * 3 + this.gapSize * 2;
  }
  @computed get height() {
    return this.tileSize;
  }
  @observable inputImageData = '';
  @observable baseCanvas = this.imageProcessor.getPlaceholderCanvas(
    this.width,
    this.height,
    this.tileSize,
    this.gapSize
  );
  @action setBaseCanvas = baseCanvas => {
    this.baseCanvas = baseCanvas;
  };
  @computed get previewCanvas() {
    return this.imageProcessor.addTextToCanvas(
      this.baseCanvas,
      this.overlayText
    );
  }
  @action addFile = file => {
    this.imageProcessor
      .getCanvasFromFile(
        file,
        this.width,
        this.height,
        this.tileSize,
        this.gapSize
      )
      .then(canvas => this.setBaseCanvas(canvas));
  };

  @action setOverlayText = overlayText => {
    this.overlayText = overlayText;
  };

  @computed get downloadImages() {
    return () =>
      this.imageProcessor.downloadImages(
        this.previewCanvas,
        this.tileSize,
        this.gapSize
      );
  }
}
