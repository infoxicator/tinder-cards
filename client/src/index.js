import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'),
);
registerServiceWorker();
