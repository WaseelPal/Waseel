import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import '../../styles/_base.scss';
import Login from '../../routes/login';
import Header from "../../components/Nav/Header"

const CoreView = () => (
  <div id="app-content">
    <Route exact path="/" component={Header} />

    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </div>
);

export default CoreView;
