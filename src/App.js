import React from 'react';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import styled from '@emotion/styled';
import { ImageProcessor } from './services';
import { AppState } from './AppState';
import { Preview, Upload, Download, TextControls } from './components';

export const AppStyled = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 100vw;
  min-height: 100vh;

  margin: 0;

  font-family: 'Lato', sans-serif;

  .title {
    font-weight: normal;
  }

  .controls {
    display: flex;
    align-items: center;
  }
`;

const imageProcessor = new ImageProcessor();
const appState = new AppState(imageProcessor);

export const App = () => (
  <Provider appState={appState}>
    <AppStyled className="App">
      <h1 className="title">
        <span role="img" aria-label="Wizard emoji">
          🧙🏻‍♀️
        </span>{' '}
        Layout your image on 3x1 grid for Instagram
      </h1>
      <Preview />
      <div className="controls">
        <Upload />
        <TextControls />
        <Download />
      </div>
      <DevTools />
    </AppStyled>
  </Provider>
);

export default App;
