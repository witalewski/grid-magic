import React, { Component } from 'react';
import { object, number } from 'prop-types';
import { observer, inject } from 'mobx-react';

class Download extends Component {
  static propTypes = {
    imageProcessor: object.isRequired,
    previewCanvas: object.isRequired,
    tileSize: number.isRequired,
  };

  render() {
    return (
        <button onClick={() => this.props.imageProcessor.downloadImages(this.props.previewCanvas,this.props.tileSize)}>Download images</button>
      );
  }
}

export { Download };
export default inject(({ appState }) => ({
  imageProcessor: appState.imageProcessor,
  previewCanvas: appState.previewCanvas,
  tileSize: appState.tileSize,
}))(observer(Download));
