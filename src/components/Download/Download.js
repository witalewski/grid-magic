import React, { Component } from 'react';
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
    background: #E6E7E6;
    border: 1px solid #476a6f;
  }

  .section-heading {
    font-weight: normal;
  }
`;
class Download extends Component {
  static propTypes = {
    downloadImages: func.isRequired,
  };

  render() {
    return (
      <DownloadStyled>
        <h2 className="section-heading">3. Download images</h2>
        <div className="download-content">
          <button
            className="download-button"
            onClick={this.props.downloadImages}
          >
            Download
          </button>
        </div>
      </DownloadStyled>
    );
  }
}

export { Download };
export default inject(({ appState }) => ({
  downloadImages: appState.downloadImages,
}))(observer(Download));
