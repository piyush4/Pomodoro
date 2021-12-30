import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ModeContextProvider} from './ModeContext'

ReactDOM.render(
    <ModeContextProvider value={"pomodoro"}>
      <App />
    </ModeContextProvider>
    ,
  document.getElementById('root')
);