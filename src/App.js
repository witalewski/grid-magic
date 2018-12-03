import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { AppStyled } from './AppStyled';
import { ImageProcessor } from './services';
import { AppState } from './AppState';
import { Preview, Upload, Download, TextControls } from './components';

const imageProcessor = new ImageProcessor();
const appState = new AppState(imageProcessor);

class App extends Component {
  render() {
    return (
      <Provider appState={appState}>
        <AppStyled className="App">
          <h1>
            <span role="img" aria-label="Wizard emoji">
              🧙🏻‍♀️
            </span>{' '}
            Layout your image on 3x1 grid for Instagram
          </h1>
          <Preview />
          <div>
            <Upload />
            <Download />
          </div>
          <TextControls />
          <DevTools />
        </AppStyled>
      </Provider>
    );
  }
}

export default App;
