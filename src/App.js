import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js'
import Contact from './pages/Contact.js'
import About from './pages/About.js'
import NavBar from './pages/NavBar.js'
 

function App() {
  return (
    <div className="App">
      <div className="headerPad">
        <h1>Joe Bernens</h1>
        <h3>Teacher, Tutor, Theologian</h3>
      </div>
      <div>
        < NavBar sticky="top" />
      </div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
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
