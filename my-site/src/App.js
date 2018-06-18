import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import NotFoundPage from './components/NotFoundPage';

const App = () => (
  <Router>
    <div>
      <Header/ >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/myworks" component={Works} />
        <Route component={NotFoundPage}/>
      </Switch>    
    </div>
  </Router> 
);

export default App;
