/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Login from '../pages/';
import Dashboard from "../pages/Dashboard";

const Routes = () => (
  // const logado = localStorage.getItem("@user");

  <Router>
    <Switch>
      {/* <Route path="/" exact component={Login} /> */}
       <Route path="/" component={Dashboard} />
    </Switch>
  </Router>
);
export default Routes;
