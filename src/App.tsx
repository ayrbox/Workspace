import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Schedule from './views/Schedule';
import Login from './views/Login';

const App: React.FC = () => (
  <Router>
    <>
      <Route exact path="/" component={Schedule} />
      <Route exact path="/admin/login" component={Login} />
      <Route exact path="/admin" render={() => <h1>Schedule Admin</h1>} />
    </>
  </Router>
);

export default App;
