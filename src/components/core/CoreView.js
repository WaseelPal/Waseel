import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import '../../styles/_base.scss';
import Login from '../../routes/login';
import styles from './core.scss';

const CoreView = () => (
  <div className={styles['app-container']}>
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
