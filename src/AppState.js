import { observable, action, computed } from 'mobx';

class AppState {
  constructor(imageProcessor) {
    this.imageProcessor = imageProcessor;
  }
  @observable tileSize = 1080;
  @observable gapSize = 10;
  @computed get width() {
    return this.tileSize * 3 + this.gapSize * 2;
  }
  @computed get height() {
    return this.tileSize;
  }
  @observable inputImageData = '';
  @observable previewCanvas = this.imageProcessor.getPlaceholderCanvas(
    this.width,
    this.height,
    this.tileSize,
    this.gapSize
  );
  @action setPreviewCanvas = previewCanvas => {
    this.previewCanvas = previewCanvas;
  };
  @action addFile = file => {
    this.imageProcessor
      .getCanvasFromFile(
        file,
        this.width,
        this.height,
        this.tileSize,
        this.gapSize
      )
      .then(canvas => this.setPreviewCanvas(canvas));
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

export { AppState };
