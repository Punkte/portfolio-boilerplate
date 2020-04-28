import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalFont from './assets/fonts';
import { Normalize } from 'styled-normalize'
import GlobalReset from './assets/css/reset';

const render = () => {
  return ReactDOM.render(
    <React.StrictMode>
      <GlobalReset />
      <Normalize />
      <GlobalFont />
      <App />
    </React.StrictMode>,
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
