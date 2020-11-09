import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import Core from '../core';

const AppView = (props) => (
  <Router history={props.history}>
    <Core />
  </Router>
);

AppView.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AppView;