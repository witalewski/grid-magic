import React from 'react';
import { inject, observer } from 'mobx-react';
import { func, string } from 'prop-types';

import styled from '@emotion/styled';

const TextControlsStyled = styled.section`
  margin: 8px;

  .text-controls-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 80px;
    background: #e6e7e6;
    border: 1px solid #476a6f;
  }

  .text-controls-content > * {
    margin: 8px;
  }

  .section-heading {
    font-weight: normal;
  }
`;

export const TextControls = ({ overlayText, setOverlayText }) => {

  const onChange = ({ target: { value } }) => {
    setOverlayText(value);
  };

  return (
    <TextControlsStyled>
      <h2 className="section-heading">2. Add text</h2>
      <div className="text-controls-content">
        <p>Text:</p>
        <input type="text" value={overlayText} onChange={onChange} />
      </div>
    </TextControlsStyled>
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
