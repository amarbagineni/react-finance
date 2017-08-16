/**
  This this is the entry point into the application,
  Also, serves are the root js to mount the App component (core of the application)

*/

import React from 'react';
import { render } from 'react-dom';
import App from './src/components/App';

render (
  <App/>,
  document.getElementById('app')
)
