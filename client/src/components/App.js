import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import RouterComponent from './Router';

const App = ({ store }) => (
  <Provider store={store}>
    <RouterComponent />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
