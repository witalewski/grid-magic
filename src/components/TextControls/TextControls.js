import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { func, string } from 'prop-types';
import { throttle } from 'lodash';

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
    this.state = {overlayText: ''};
  }

  onChange = ({ target: { value } }) => {
    this.setState({ overlayText: value });
    this.setOverlayText(value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.overlayText}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default inject(({ appState }) => ({
  overlayText: appState.overlayText,
  setOverlayText: appState.setOverlayText,
}))(observer(TextControls));
