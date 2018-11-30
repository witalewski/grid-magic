import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { AppStyled } from './AppStyled';
import { ImageProcessor } from './services/ImageProcessor';
import { AppState } from './AppState';
import { Preview } from './components/Preview';
import { Upload } from './components/Upload';
import { Download } from './components/Download';

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
        </AppStyled>
      </Provider>
    );
  }
}

export default App;
