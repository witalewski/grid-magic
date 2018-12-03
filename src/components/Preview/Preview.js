import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { inject, observer } from 'mobx-react';

class Preview extends Component {
  static propTypes = {
    previewCanvas: object,
    addFile: func.isRequired,
  };
  static defaultProps = {
    previewCanvas: null,
  };

  render() {
    return (
      <img
        alt="Preview"
        className="preview-image"
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
