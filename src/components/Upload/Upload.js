import React from 'react';
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
    background: #e6e7e6;
    border: 1px solid #476a6f;
  }

  .section-heading {
    font-weight: normal;
  }
`;

export const Upload = ({ addFile }) => (
  <UploadStyled>
    <h2 className="section-heading">1. Upload file</h2>
    <div className="file-upload-content">
      <input
        className="file-upload"
        type="file"
        onChange={event => addFile(event.target.files[0])}
      />
    </div>
  </UploadStyled>
);

Upload.propTypes = {
  addFile: func.isRequired,
};

export default inject(({ appState }) => ({
  addFile: appState.addFile,
}))(observer(Upload));
