import React from 'react';
import { object } from 'prop-types';
import { inject, observer } from 'mobx-react';
import styled from '@emotion/styled';

const PreviewStyled = styled.div`
height: 100%;
  .preview-image {
    max-width: 100%;
  }
`

export const Preview = ({ previewCanvas }) => (
  <PreviewStyled className="row align-items-center">
    <div className="col-12">
      <img
        alt="Preview"
        className="preview-image"
        src={previewCanvas && previewCanvas.toDataURL('image/png')}
      />
    </div>
  </PreviewStyled>
);

Preview.propTypes = {
  previewCanvas: object,
};

Preview.defaultProps = {
  previewCanvas: null,
};

export default inject(({ appState }) => ({
  previewCanvas: appState.previewCanvas,
}))(observer(Preview));
