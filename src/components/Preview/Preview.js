import React, { Component, createRef } from 'react';
import { string } from 'prop-types';
import { inject, observer } from 'mobx-react';

class Preview extends Component {
  static propTypes = {
    inputImageData: string,
    previewImageData: string,
  };
  static defaultProps = {
    inputImageData: '',
    previewImageData: '',
  };

  canvas = createRef();
  tileSize = 1080 / 4;
  width = this.tileSize * 3 + 2;
  height = this.tileSize;

  onImageLoad = ({ target }) => {
    const { canvas, width, height, tileSize } = this;

    const ctx = canvas.current.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);
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
    ctx.drawImage(target, xOffset, yOffset, targetWidth, targetHeight);
    ctx.fillRect(tileSize, 0, 1, tileSize);
    ctx.fillRect(tileSize * 2, 0, 1, tileSize);
  };

  displayImage() {
    const { onImageLoad, canvas, width, height, tileSize } = this;
    const { inputImageData } = this.props;

    if (inputImageData) {
      const img = new Image();
      img.onload = onImageLoad;
      img.src = inputImageData;
    } else {
      const ctx = canvas.current.getContext('2d');
      ctx.fillStyle = '#3c3836';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'white';
      ctx.fillRect(tileSize, 0, 1, tileSize);
      ctx.fillRect(tileSize * 2, 0, 1, tileSize);
    }
  }

  componentDidMount() {
    this.displayImage();
  }
  componentDidUpdate() {
    this.displayImage();
  }

  render() {
    const { canvas, width, height } = this;
    return (
      <canvas ref={this.canvas} alt="Preview" width={width} height={height} />
    );
  }
}

export { Preview };
export default inject(({ appState }) => ({
  inputImageData: appState.inputImageData,
  previewImageData: appState.previewImageData,
}))(observer(Preview));
