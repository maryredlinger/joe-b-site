import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js'
import Contact from './pages/Contact.js'
import About from './pages/About.js'
import NavBar from './pages/NavBar.js'

import English from './pages/English.js'
import Math from './pages/Math.js'
import Drama from './pages/Drama.js'
import StudySkills from './pages/StudySkills.js'
import Classes from './pages/Classes.js'
import Tutoring from './pages/Tutoring.js'
import Credentials from './pages/Credentials.js'
import Bio from './pages/Bio.js'




 

function App() {
  return (
    <div className="App">
      {/*<div className="headerPad">
        <h1>Mr. Joseph Bernens, M.A. ED</h1>
        <h3>Teacher & Tutor for 28+ years</h3>
        <h4>Fully credentialed including Special Ed.</h4>
  </div>*/}
      <div className="headerPad">
        <h1 className="fancy-font">Athanasius Academia</h1>
        <h4><b>Supporting Families - Educating Children</b></h4>
      </div>
      <div>
        < NavBar />
      </div>
      
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Route path="/english_language_arts" exact component={English} />
            <Route path="/math_social_studies" exact component={Math} />
            <Route path="/theatre_drama" exact component={Drama} />
            <Route path="/study_skills" exact component={StudySkills} />
            <Route path="/classes" exact component={Classes} />
            <Route path="/tutoring" exact component={Tutoring} />
            <Route path="/credentials" exact component={Credentials} />
            <Route path="/bio" exact component={Bio} />
          </Switch>
        </Router>
        <br></br>
        <footer>
            <div className="Footer">
              <h3 className="footerFont"><a href="/">Home</a></h3>
              <h3 className="footerFont"><a href="/about">About</a></h3>
              <h3 className="footerFont"><a href="/credentials">Credentials</a></h3>
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
