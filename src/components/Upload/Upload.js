import React, { Component } from 'react';
import { func } from 'prop-types';
import { observer, inject } from 'mobx-react';

class Upload extends Component {
  static propTypes = {
    addFile: func.isRequired,
  };

  render() {
    const { addFile } = this.props;
    return <input type="file" onChange={event => addFile(event.target.files[0])} />;
  }
}

export { Upload };
export default inject(({ appState }) => ({
  addFile: appState.addFile,
}))(observer(Upload));
