import React, { Component } from 'react';
import { func } from 'prop-types';
import { observer, inject } from 'mobx-react';
import styled from '@emotion/styled';

const UploadStyled = styled.section`

    margin: 8px;

  .file-upload-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 80px;
    background: #E6E7E6;
    border: 1px solid #476A6F;
  }
`;

export class Upload extends Component {
  static propTypes = {
    addFile: func.isRequired,
  };

  render() {
    const { addFile } = this.props;
    return (
      <UploadStyled>
        <h2>1. Upload file</h2>
        <div className="file-upload-content">
          <input
            className="file-upload"
            type="file"
            onChange={event => addFile(event.target.files[0])}
          />
        </div>
      </UploadStyled>
    );
  }
}

export default inject(({ appState }) => ({
  addFile: appState.addFile,
}))(observer(Upload));
