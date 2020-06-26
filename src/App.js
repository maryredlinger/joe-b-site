import React from 'react';
import './App.css'
import { Nav, NavItem, NavLink as Link } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js'
 

function App() {
  return (
    <div className="App">
      <h1>Joe Bernans Portoflio Site</h1>
        <h2>Teacher, Tutor, Theologian</h2>
        <div >
          <Nav className="navbar navbar-dark bg-primary">
            <Link className="navbar-brand" href="#">Home</Link>
            
          <div id="navbarColor01">
            <ul className="NavFlex navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">About</Link>
              </li>
            </ul>
          </div>
          </Nav>
        </div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
