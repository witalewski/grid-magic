import React, { Component } from 'react';
import { func } from 'prop-types';
import { observer, inject } from 'mobx-react';

class Upload extends Component {
  static propTypes = {
    setInputImageData: func.isRequired,
  };
  onChange = event => {
    const fileReader = new FileReader();

    fileReader.onload = e => {
      const dataURI = e.target.result;
      this.props.setInputImageData(dataURI);
    };

    fileReader.readAsDataURL(event.target.files[0]);
  };

  render() {
    return <input type="file" onChange={this.onChange} />;
  }
}

export { Upload };
export default inject(({ appState }) => ({
  setInputImageData: appState.setInputImageData,
}))(observer(Upload));
