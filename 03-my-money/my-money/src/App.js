import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './elements/Header';
import Home from './pages/Home';
import Records from './pages/Records';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/records/:data" component={Records} />
      </div>
    </Router>
  );
}

export default App;
