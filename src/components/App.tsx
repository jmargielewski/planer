import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default App;
