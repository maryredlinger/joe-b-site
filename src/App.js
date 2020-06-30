import React from 'react';
import './App.css'
import { Nav, NavItem, NavLink as Link } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js'
import Contact from './pages/Contact.js'
 

function App() {
  return (
    <div className="App">
      <div className="headerPad">
        <h1>Joe Bernans</h1>
        <h3>Teacher, Tutor, Theologian</h3>
      </div>
        <div >
          <Nav className="NavFlex navbar navbar-dark bg-primary">
            <NavItem>
            <Link className="navbar-brand" href="/contact">Joe Bernans</Link>
            </NavItem>
              <NavItem className="">
                <Link className="colorWhite" href="/">Home <span className="sr-only">(current)</span></Link>
              </NavItem>
              <NavItem className="">
                <Link href="/about" className="colorWhite">About</Link>
              </NavItem>
              <NavItem className="">
                <Link href="/courses" className="colorWhite">Courses</Link>
              </NavItem>
              <NavItem className="">
                <Link href="/contact" className="colorWhite">Contact</Link>
              </NavItem>
          </Nav>
        </div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact  />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
        <br></br>
        <footer>
            <div className="Footer">
              <h3 className="+footerFont"><a href="/">Home</a></h3>
              <h3 className="footerFont"><a href="/about">About</a></h3>
              <h3 className="footerFont"><a href="/contact">Contact</a></h3>
            </div>
            <div className="footer-copyright text-center py-3 ">
            © 2020 Copyright: <a href="https://www.maryredlinger.com/">Mary Redlinger</a>
          </div>
        </footer>
    </div>
  );
}

export default App;
