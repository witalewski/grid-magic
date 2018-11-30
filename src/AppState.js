import { observable, action, computed } from 'mobx';
import { ImageProcessor } from './services/ImageProcessor';

class AppState {
  @observable imageProcessor = new ImageProcessor();
  @observable tileSize = 1080;
  @computed get width() {
    return this.tileSize * 3 + 2;
  }
  @computed get height() {
    return this.tileSize;
  }
  @observable inputImageData = '';
  @observable previewCanvas = this.imageProcessor.getPlaceholderCanvas(
    this.width,
    this.height,
    this.tileSize
  );
  @action setPreviewCanvas = previewCanvas => {
    this.previewCanvas = previewCanvas;
  };
  @action setInputImageData = inputImageData => {
    this.inputImageData = inputImageData;
    this.imageProcessor
      .getCanvasFromImageData(
        inputImageData,
        this.width,
        this.height,
        this.tileSize
      )
      .then(canvas => this.setPreviewCanvas(canvas));
  };
}

export { AppState };
