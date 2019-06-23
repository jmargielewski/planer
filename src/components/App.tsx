import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Route path="/" component={() => <div>hello</div>} />
  </Router>
);

export default App;
