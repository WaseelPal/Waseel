import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

const AppContainer = (props) => (
  <Provider store={props.store}>
    <h2>Waseel Web App</h2>
  </Provider>
);

AppContainer.propTypes = {
  store: PropTypes.object.isRequired
};

export default AppContainer;