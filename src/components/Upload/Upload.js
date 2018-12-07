import React from 'react';
import styled from '@emotion/styled';
import { func } from 'prop-types';
import { observer, inject } from 'mobx-react';

const UploadStyled = styled.div`
  .file-upload {
    cursor: pointer;
  }
`;

export const Upload = ({ addFile }) => (
  <UploadStyled>
    <input
      className="file-upload"
      type="file"
      onChange={event => addFile(event.target.files[0])}
    />
  </UploadStyled>
);

Upload.propTypes = {
  addFile: func.isRequired,
};

export default inject(({ appState }) => ({
  addFile: appState.addFile,
}))(observer(Upload));
