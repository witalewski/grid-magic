import React from 'react';
import { object } from 'prop-types';
import { inject, observer } from 'mobx-react';
import styled from '@emotion/styled';

const PreviewStyled = styled.img`
  width: calc(100% - 72px);
  max-width: 960px;

  margin: 36px 0;
  padding: 0;
`;

export const Preview = ({previewCanvas}) => (
  <PreviewStyled
    alt="Preview"
    src={
      previewCanvas &&
      previewCanvas.toDataURL('image/png')
    }
  />
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
