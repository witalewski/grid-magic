import React, { Component } from 'react';
import { func } from 'prop-types';
import { observer, inject } from 'mobx-react';

export class Upload extends Component {
  static propTypes = {
    addFile: func.isRequired,
  };

  render() {
    const { addFile } = this.props;
    return (
      <input
        className="file-upload"
        type="file"
        onChange={event => addFile(event.target.files[0])}
      />
    );
  }
}

export default inject(({ appState }) => ({
  addFile: appState.addFile,
}))(observer(Upload));
