import React from 'react';
import '../styles/About.css'
import { NavLink as Link } from 'reactstrap';


const Credentials = () => {
    return(
        <div className="container">
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

export default Credentials;