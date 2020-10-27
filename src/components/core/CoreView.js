import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import '../../styles/_base.scss';
import Login from '../../routes/login';
import Header from "../../components/Nav/Header"
import Cart from "../../components/Pages/Cart"
import Contact from "../../components/Pages/Contact"

const CoreView = () => (
  <div id="app-content">
    <Route exact path="/" component={Header} />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </div>
);

export default CoreView;
