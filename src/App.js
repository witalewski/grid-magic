import React, { Component, Fragment } from 'react';
import { Provider } from 'mobx-react';
import { AppStyled } from "./AppStyled";
import { AppState } from './AppState';
import { Preview } from './components/Preview';
import { Upload } from './components/Upload';

class App extends Component {
  constructor() {
    super();
    this.appState = new AppState();
  }

  render() {
    return (
      <AppStyled className="App">
        <Provider appState={this.appState}>
          <Fragment>
            <Preview />
            <Upload />
          </Fragment>
        </Provider>
      </AppStyled>
    );
  }
}

export default App;
