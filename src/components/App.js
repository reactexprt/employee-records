import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './login/LoginPage';
import DashboardView from './dashboard/DashboardView';
import './main.scss';

const Dashboard = () => {
  return (
    <React.Fragment>
      <div id="main">
        <DashboardView />
      </div>
    </React.Fragment>
  );
}

const Login = () => {
  return (
    <React.Fragment>
      <div id="main">
        <LoginPage />
      </div>
    </React.Fragment>
  );
}

const App = () => {
  return (
    <Router>
      <Route path="/" component={Login} exact />
      <Route path="/sb/" component={Dashboard} exact />
    </Router>
  );
};

export default App;

