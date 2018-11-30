import React, { Component } from 'react';
import { object } from 'prop-types';
import { inject, observer } from 'mobx-react';

class Preview extends Component {
  static propTypes = {
    previewCanvas: object,
  };
  static defaultProps = {
    previewCanvas: null,
  };
  render() {
    return (
      <div>
        <img
          alt="Preview"
          className="preview-image"
          src={
            this.props.previewCanvas &&
            this.props.previewCanvas.toDataURL('image/png')
          }
        />
      </div>
    );
  }
}

export { Preview };
export default inject(({ appState }) => ({
  previewCanvas: appState.previewCanvas,
}))(observer(Preview));
