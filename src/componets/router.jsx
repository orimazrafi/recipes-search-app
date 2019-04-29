import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Recipe from './recipe';
import Navbar from './navbar';

const Router = () => (
  <React.Fragment>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/recipe/:id' component={Recipe} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default Router;
