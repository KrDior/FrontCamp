import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Privacy from '../containers/Privacy';
import ForgotPassword from '../containers/ForgotPassword';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import Terms from '../containers/Terms';

const routes = (
  <Switch>
    <Route path="/privacy">
      <Privacy />
    </Route>
    <Route path="/forgotpassword">
      <ForgotPassword />
    </Route>
    <Route path="/signin">
      <SignIn />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    <Route path="/terms">
      <Terms />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default routes;
