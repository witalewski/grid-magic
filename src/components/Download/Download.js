import React from 'react';
import { func } from 'prop-types';
import { observer, inject } from 'mobx-react';

export const Download = ({ downloadImages }) => (
  <button
    className="btn btn-outline-success my-2 my-sm-0"
    onClick={downloadImages}
  >
    Download images
  </button>
);

Download.propTypes = {
  downloadImages: func.isRequired,
};

export default inject(({ appState }) => ({
  downloadImages: appState.downloadImages,
}))(observer(Download));
