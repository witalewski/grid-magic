import React, { useEffect, useRef } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

export const Preview = ({ image }) => {
  const canvas = useRef(null);

  const width = (1080 * 3 + 2) / 4;
  const height = 1080 / 4;

  useEffect(() => {
    if (image && canvas.current) {
      const ctx = canvas.current.getContext('2d');
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
      };
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
