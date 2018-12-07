import React from 'react';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import styled from '@emotion/styled';
import { ImageProcessor } from './services';
import { AppState } from './AppState';
import { Preview, Nav } from './components';

export const AppStyled = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  height: 100vh;
  font-family: 'Lato', sans-serif;
`;

const imageProcessor = new ImageProcessor();
const appState = new AppState(imageProcessor);

export const App = () => (
  <Provider appState={appState}>
    <AppStyled className="App container-fluid">
      <Nav />
      <Preview />
      <DevTools />
    </AppStyled>
  </Provider>
);

export default App;
