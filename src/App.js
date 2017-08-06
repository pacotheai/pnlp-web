import React, { Component } from 'react';
import { Home } from './modules/Home';
import { Tokenizer } from './modules/Tokenizer';
import { Sentences } from './modules/Sentences';
import { Sentiment } from './modules/Sentiment';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import './App.css';

/**
 * Main entry point
 *
 * @since 0.1.0
 */
class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Nav bsStyle="tabs">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/sentences">Sentences</NavItem>
              <NavItem href="/tokenizer">Tokenizer</NavItem>
              <NavItem href="/sentiment">Sentiment Analysis</NavItem>
            </Nav>
            <Route exact path="/" component={Home}/>
            <Route path="/sentences" component={Sentences}/>
            <Route path="/tokenizer" component={Tokenizer}/>
            <Route path="/sentiment" component={Sentiment}/>
          </div>
        </Router>
    );
  }
}

export default App;
