import React from 'react';
import { inject, observer } from 'mobx-react';
import { func, string } from 'prop-types';

import styled from '@emotion/styled';

export const TextControls = ({ overlayText, setOverlayText }) => {
  const onChange = ({ target: { value } }) => {
    setOverlayText(value);
  };

  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Add text..."
        aria-label="Add text"
        value={overlayText}
        onChange={onChange}
      />
    </form>
  );
};

TextControls.propTypes = {
  overlayText: string,
  setOverlayText: func.isRequired,
};
TextControls.defaultProps = {
  overlayText: '',
};

export default inject(({ appState }) => ({
  overlayText: appState.overlayText,
  setOverlayText: appState.setOverlayText,
}))(observer(TextControls));
