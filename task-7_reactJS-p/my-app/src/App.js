import React from 'react';
import 'typeface-roboto';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';
import AppAppBar from './views/AppAppBar';
import AppFooter from './views/AppFooter';

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <AppAppBar />
      {routes}
      <AppFooter />
    </Router>
  );
}
