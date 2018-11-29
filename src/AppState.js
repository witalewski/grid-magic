import { observable, action } from 'mobx';

class AppState {
  @observable inputImageData = '';
  @observable downloadImages;

  @action setInputImageData = inputImageData => {
    this.inputImageData = inputImageData;
  };

  @action setDownloadImages = downloadImages => {
    this.downloadImages = downloadImages;
  }
}

export { AppState };
