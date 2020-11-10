import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import '../../styles/_base.scss';
import Login from '../../routes/login';
import styles from './core.scss';
import Header from '../../components/Header/Header.js';

const CoreView = () => (
  <div className={styles['app-container']}>
    <Header />
    <Switch>
      <Route
        exact
        path="/login"
        component={Login}
      />
    </Switch>
  </div>
);

export default CoreView;
