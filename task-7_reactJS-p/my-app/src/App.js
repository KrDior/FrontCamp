import React from 'react';
import 'typeface-roboto';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import AppAppBar from './views/AppAppBar';
import AppFooter from './views/AppFooter';

export default function App() {
  return (
    <Router>
      <AppAppBar />
      {routes}
      <AppFooter />
    </Router>
  );
}
