import React from 'react';
import '../styles/About.css'
import { NavLink as Link } from 'reactstrap';


const About = () => {
    return(
        <div className="container">
            < br />
            <div>
            {/*
            <div className="row">
                <div className="col-md-4 col-sm-12 mt-3">
                    <img className="profileImg" src="./profile.png"/>
    </div>
    <div className="col-md-8 col-sm-12 mt-3 mb-3">*/}
                    <div className="expContainer">
                        <h1 className="blue2"><b>Athanasius Academia</b></h1>
                        <h4 className="blue2"> - San Diego CA -</h4>
                        <h3 className="itemExp">Athanasius Academia offers homeschooling families tutoring and courses to supplement their studies.  It provides a safe environment that engages students and encourages them strive for excellence.  Classes meet graduation standards of California.  I partner with the parent to ensure the class is tailored to meet their child’s needs. Classes are offered both in the home and/or online.  <h4><a href="/classes"><i>Please see the Offerings - Classes Tab for current offerings.</i></a></h4></h3>
                        <br />
                    </div>
                    <div className="expContainer">
                        <h1 className="blue2"><b>About My Namesake</b></h1>

                        <h3 className="itemExp">St. Athanasius was a strong leader and bishop of the 4th century Church. He stood for the truth. He was present at the Council of Nicaea, called by the Emperor Constantine in 325 A.D., where he spoke eloquently against the heresy of Arianism.  Athanasius’ fortitude is an inspiration to me and for my work as a teacher.</h3>
                        <br/><br/>
                </div>
            </div>
            <div className="linkContainer">
                <a href="/about/#credentials"><h3>Credentials</h3></a>
                <a href="/about/#education"><h3>Education</h3></a>
                <a href="/about/#experience"><h3>Experience</h3></a>
            </div>
            <hr className="line-break"></hr>
            <h1 id="credentials" className="cred">- Credentials -</h1>
            <div className="expContainer">
                <div className="schoolContainer">
                    <h3 className="credentials">California Clear Single Subject Teaching Credential, English, K-12 California</h3>
                    <br />
                    <h3 className="credentials">Clear Specialist Instruction Credential in Special Education, Learning Handicapped</h3>
                </div>
            </div>
            <h1 id="education" className="ed">- Education -</h1>
            <div className="expContainer">
                <div className="schoolContainer">
                    <h1 className="item"><a target="_blank" href="https://www.sdsu.edu/"><b>San Diego State University</b></a></h1>
                    <h3 className="item">San Diego, CA</h3>
                    <p className="item">Master of Arts in Education</p>

                <br/>
                    <h1 className="item"><a target="_blank" href="https://www.sandiego.edu/"><b>University of San Diego</b></a></h1>
                    <h3 className="item">San Diego, CA</h3>
                    <p className="item">Bachelor of Arts in Philosophy</p>
                </div>
            </div>
            <h1 id="experience" className="ed">- Experience -</h1>
                <div className="expContainer">
                    <h2 className="itemExp blue2"><b>28+&nbsp;</b> years of teaching Middle and High School students</h2>
                    <h2 className="itemExp blue2"><b>18+&nbsp;</b> years teaching and directing theatre</h2>
                    <h2 className="itemExp blue2"><b>2&nbsp;</b> years of tutoring</h2>
                    <h2 className="itemExp blue2"><b>2&nbsp;</b>years of homeschool involvement</h2>
                </div>
            
        </div>
    )
}

export default About;