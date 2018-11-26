import React, { useEffect, useRef } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

export const Preview = ({ image }) => {
  const canvas = useRef(null);

  const tileSize = 1080 / 4;
  const width = tileSize * 3 + 2;
  const height = tileSize;

  const onImageLoad = ({ target }) => {
    if (canvas.current) {
      const ctx = canvas.current.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, width, height);
      let targetWidth; let targetHeight; let xOffset; let
        yOffset;
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
    }
  };

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.onload = onImageLoad;
      img.src = image;
    }
  });

  return image && <canvas ref={canvas} alt="Preview" width={width} height={height} />;
};

Preview.propTypes = {
  image: string,
};

Preview.defaultProps = {
  image: '',
};

const mapStateToProps = state => ({
  image: state.image.image,
});

export const ConnectedPreview = connect(mapStateToProps)(Preview);