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
  getOnDrop = addFile => (ev) => {
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
          const file = ev.dataTransfer.items[i].getAsFile();
          addFile(file);
        }
      }
    } else {
      addFile(ev.dataTransfer.files[0]);
    } 
    this.removeDragData(ev)
  }

  removeDragData(ev) {
    if (ev.dataTransfer.items) {
      ev.dataTransfer.items.clear();
    } else {
      ev.dataTransfer.clearData();
    }
  }

  render() {
    const { addFile } = this.props;
    return (
        <img
          alt="Preview"
          className="preview-image"
          src={
            this.props.previewCanvas &&
            this.props.previewCanvas.toDataURL('image/png')
          }
          onDrop={this.getOnDrop(addFile)}
        />
    );
  }
}

export { Preview };
export default inject(({ appState }) => ({
  previewCanvas: appState.previewCanvas,
  addFile: appState.addFile,
}))(observer(Preview));
