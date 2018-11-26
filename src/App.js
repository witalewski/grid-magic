import React from 'react';
import './App.css';
import { ConnectedControls, ConnectedPreview } from './components';

export const App = () => (
  <div className="App">
    <ConnectedPreview />
    <ConnectedControls />
  </div>
);
