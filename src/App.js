import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './home'
import { Products } from './products'
import { PageNotFound } from './common'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
