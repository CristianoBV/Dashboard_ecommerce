/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Login from '../pages/';
import Home from "../pages/Home";

const Routes = () => (
  // const logado = localStorage.getItem("@user");

  <Router>
    <Switch>
      {/* <Route path="/" exact component={Login} /> */}
       <Route path="/" component={Home} />
    </Switch>
  </Router>
);
export default Routes;
