import React, { Component, createRef } from 'react';
import { string, func } from 'prop-types';
import { inject, observer } from 'mobx-react';

class Preview extends Component {
  static propTypes = {
    inputImageData: string,
    setDownloadImages: func.isRequired,
  };
  static defaultProps = {
    inputImageData: '',
  };

  createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  previewImage = createRef();
  tileSize = 1080;
  width = this.tileSize * 3 + 2;
  height = this.tileSize;
  previewCanvas = this.createCanvas(this.width, this.height);
  exportCanvas = this.createCanvas(this.tileSize, this.tileSize);

  onImageLoad = ({ target }) => {
    const { previewCanvas, previewImage, width, height, tileSize } = this;

    const bgCtx = previewCanvas.getContext('2d');
    bgCtx.fillStyle = 'white';
    bgCtx.fillRect(0, 0, width, height);
    let targetWidth;
    let targetHeight;
    let xOffset;
    let yOffset;
    const imgProportions = target.width / target.height;
    const canvasProportions = width / height;
    if (imgProportions > canvasProportions) {
      targetWidth = width;
      targetHeight = width / imgProportions;
      xOffset = 0;
      yOffset = (height - targetHeight) / 2;
    } else {
      targetWidth = height * imgProportions;
      targetHeight = height;
      xOffset = (width - targetWidth) / 2;
      yOffset = 0;
    }
    bgCtx.drawImage(target, xOffset, yOffset, targetWidth, targetHeight);
    bgCtx.fillRect(tileSize, 0, 1, tileSize);
    bgCtx.fillRect(tileSize * 2 + 1, 0, 1, tileSize);

    previewImage.current.src = previewCanvas.toDataURL('image/png');
  };

  displayImage() {
    const {
      onImageLoad,
      previewCanvas,
      previewImage,
      width,
      height,
      tileSize,
    } = this;
    const { inputImageData } = this.props;

    if (inputImageData) {
      const img = new Image();
      img.onload = onImageLoad;
      img.src = inputImageData;
    } else {
      const ctx = previewCanvas.getContext('2d');
      ctx.fillStyle = '#3c3836';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'white';
      ctx.fillRect(tileSize + 1, 0, 1, tileSize);
      ctx.fillRect(tileSize * 2 + 2, 0, 1, tileSize);
      previewImage.current.src = previewCanvas.toDataURL('image/png');
    }
  }

  saveBase64AsFile(base64, fileName) {
    const link = document.createElement('a');
    link.setAttribute('href', base64);
    link.setAttribute('download', fileName);
    link.click();
  }

  downloadImages = () => {
    const ctx = this.exportCanvas.getContext('2d');
    [0, this.tileSize + 1, 2 * this.tileSize + 2].forEach((x, i) => {
      ctx.drawImage(
        this.previewCanvas,
        x,
        0,
        this.tileSize,
        this.tileSize,
        0,
        0,
        this.tileSize,
        this.tileSize
      );

      let data = this.exportCanvas.toDataURL('image/png');
      console.log(data);
      this.saveBase64AsFile(data, `export-${i}.png`);
    });
  };

  componentDidMount() {
    this.displayImage();
    this.props.setDownloadImages(this.downloadImages);
  }
  componentDidUpdate() {
    this.displayImage();
  }

  render() {
    const { previewImage } = this;
    return (
      <div>
        <img alt="Preview" ref={previewImage} style={{ maxWidth: '100%' }} />
      </div>
    );
  }
}

export { Preview };
export default inject(({ appState }) => ({
  inputImageData: appState.inputImageData,
  setDownloadImages: appState.setDownloadImages,
}))(observer(Preview));
