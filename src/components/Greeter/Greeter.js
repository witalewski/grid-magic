import React, { Component, createRef } from 'react';
import { observer, inject } from 'mobx-react';
import { string, func } from 'prop-types';
import { GreeterStyled } from './GreeterStyled';

class Greeter extends Component {
  static propTypes = {
    greeting: string.isRequired,
    name: string.isRequired,
    setName: func.isRequired,
  };

  input = createRef();

  componentDidMount() {
    this.input.current.focus();
  }

  onNameChange = ({ target: { value } }) => {
    this.props.setName(value);
  };

  render() {
    return (
      <GreeterStyled>
        <h1>{this.props.greeting}</h1>
        <div>
          Your name:{' '}
          <input
            ref={this.input}
            type="text"
            value={this.props.name}
            onChange={this.onNameChange}
          />
        </div>
      </GreeterStyled>
    );
  }
}

export { Greeter };
export default inject(({ appState }) => ({
  greeting: appState.greeting,
  name: appState.name,
  setName: appState.setName,
}))(observer(Greeter));
