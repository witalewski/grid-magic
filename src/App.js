import React, { Component, Fragment } from 'react';
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
      <AppStyled className="App">
        <Provider appState={appState}>
          <Fragment>
            <Preview />
            <div>
              <Upload />
              <Download />
            </div>
          </Fragment>
        </Provider>
      </AppStyled>
    );
  }
}

export default App;
