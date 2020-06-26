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
        

          <Nav className="NavFlex navbar navbar-dark bg-primary">

            <NavItem>
            <Link className="navbar-brand" href="#">Home</Link>
            </NavItem>
              <NavItem className="">
                <Link className="colorWhite" href="#">Home <span className="sr-only">(current)</span></Link>
              </NavItem>
              <NavItem className="">
                <Link className="colorWhite" href="#">Features</Link>
              </NavItem>
              <NavItem className="">
                <Link className="colorWhite" href="#">Pricing</Link>
              </NavItem>
              <NavItem className="">
                <Link className="colorWhite" href="#">About</Link>
              </NavItem>

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
