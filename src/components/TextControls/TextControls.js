import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { func, string } from 'prop-types';
import { throttle } from 'lodash';
import styled from '@emotion/styled';

const TextControlsStyled = styled.section`
  margin: 8px;

  .text-controls-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 80px;
    background: #E6E7E6;
    border: 1px solid #476a6f;
  }

  .text-controls-content > * {
    margin: 8px;
  }
`;

export class TextControls extends Component {
  static propTypes = {
    overlayText: string,
    setOverlayText: func.isRequired,
  };
  static defaultProps = {
    overlayText: '',
  };

  static initialState = {
    overlayText: '',
  };

  constructor(props) {
    super(props);
    this.setOverlayText = throttle(this.props.setOverlayText, 500);
    this.state = { overlayText: '' };
  }

  onChange = ({ target: { value } }) => {
    this.setState({ overlayText: value });
    this.setOverlayText(value);
  };
  render() {
    return (
      <TextControlsStyled>
        <h2>2. Add text</h2>
        <div className="text-controls-content">
          <p>Text:</p>
          <input
            type="text"
            value={this.state.overlayText}
            onChange={this.onChange}
          />
        </div>
      </TextControlsStyled>
    );
  }
}

export default inject(({ appState }) => ({
  overlayText: appState.overlayText,
  setOverlayText: appState.setOverlayText,
}))(observer(TextControls));
