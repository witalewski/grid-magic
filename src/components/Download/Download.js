import React from 'react';
import { func } from 'prop-types';
import { observer, inject } from 'mobx-react';
import styled from '@emotion/styled';

const DownloadStyled = styled.section`
  margin: 8px;

  .download-content {
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
export const Download = ({ downloadImages }) => (
  <DownloadStyled>
    <h2 className="section-heading">3. Download images</h2>
    <div className="download-content">
      <button className="download-button" onClick={downloadImages}>
        Download
      </button>
    </div>
  </DownloadStyled>
);

Download.propTypes = {
  downloadImages: func.isRequired,
};

export default inject(({ appState }) => ({
  downloadImages: appState.downloadImages,
}))(observer(Download));
