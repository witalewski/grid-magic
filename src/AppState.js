import { observable, action } from 'mobx';

class AppState {
  @observable inputImageData = '';
  @observable imageCanvas;
  @observable previewImageData = '';

  @action setInputImageData = inputImageData => {
    this.inputImageData = inputImageData;
  };
  @action setImageCanvas = imageCanvas => {
    this.imageCanvas = imageCanvas;
  };

  @action setPreviewImageData = previewImageData => {
    this.previewImageData = previewImageData;
  };
}

export { AppState };
