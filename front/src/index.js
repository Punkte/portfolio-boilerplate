import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalFont from './assets/fonts';
import { Normalize } from 'styled-normalize'
import GlobalReset from './assets/css/reset';
import { BrowserRouter as Router } from 'react-router-dom';

const render = () => {
  return ReactDOM.render(
    <Router>
      <GlobalReset />
      <Normalize />
      <GlobalFont />
      <App />
    </Router>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
