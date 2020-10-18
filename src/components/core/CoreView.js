import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import '../../styles/_base.scss';
import Login from '../../routes/login';

const CoreView = () => (
  <div id="app-content" className="container-fluid">
    <Switch>
      <Route
        exact
        path="/"
        component={Login}
      />
    </Switch>
  </div>
);

export default CoreView;
