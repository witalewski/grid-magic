import React, { Component } from 'react';
import { object } from 'prop-types';
import { inject, observer } from 'mobx-react';
import styled from '@emotion/styled';

const PreviewStyled = styled.img`
    width: calc(100% - 72px);
    max-width: 960px;

    margin: 36px 0;
    padding: 0;
`;

class Preview extends Component {
  static propTypes = {
    previewCanvas: object,
  };
  static defaultProps = {
    previewCanvas: null,
  };

  render() {
    return (
      <PreviewStyled
        alt="Preview"
        src={
          this.props.previewCanvas &&
          this.props.previewCanvas.toDataURL('image/png')
        }
      />
    );
  }
}

export { Preview };
export default inject(({ appState }) => ({
  previewCanvas: appState.previewCanvas,
}))(observer(Preview));
