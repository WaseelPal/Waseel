import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Header from './Navigation/Header'


const AppContainer = (props) => (
  <Provider store={props?.store}>
    <div>
      <Header />
      <h2>Waseel Web App</h2>

    </div>
  </Provider>
);

AppContainer.propTypes = {
  store: PropTypes.object.isRequired
};

export default AppContainer;