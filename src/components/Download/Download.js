import React, { Component } from 'react';
import { func } from 'prop-types';
import { observer, inject } from 'mobx-react';

class Download extends Component {
  static propTypes = {
    downloadImages: func.isRequired,
  };

  render() {
    return (
        <button onClick={this.props.downloadImages}>Download images</button>
      );
  }
}

export { Download };
export default inject(({ appState }) => ({
  downloadImages: appState.downloadImages,
}))(observer(Download));
