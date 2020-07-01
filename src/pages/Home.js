import React from 'react';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';


const Home = () => {
    return(
        <div className="">
            <div className="background">
                
                <div className="transbox">
                    <h2>Mr. Joseph Bernens, M.A. ED</h2>
                    <h3>Teacher for 28+ years</h3>
                    <h3>Fully credentialed including Special Ed.</h3>
                </div>
            </div>
            <br></br>
            <div className="HomeDisplay">
                <span>
                    <h3>-Education & Certifications-</h3>
                    <Link href="/about-me"><img src="education.png"></img></Link>
                    <Link href="/about-me">View certifications. →</Link>
                </span>
                <span>
                    <h3>-Tutoring Courses & curriculum-</h3>
                    <Link href="/curriculum"><img src="curriculum.png"></img></Link>
                    <Link href="/curriculum">View curriculum. →</Link>
                </span>
                <span>
                    <h3>-Contact Information-</h3>
                    <Link href="/contact"><img src="contact.png"></img></Link>
                    <Link href="/contact">View contact information. →</Link>
                </span>
            </div>
            <div className="background">
                <div className="transbox">
                <h2>Mr. Joseph Bernens, M.A. ED</h2>
                <h3>Teacher for 28+ years</h3>
                <h3>Fully credentialed including Special Ed.</h3>
                <br></br>
                <h2>SPECIALIZES IN:</h2>
                
                    <h4>Math</h4>
                    <h4>English / Language Arts</h4>
                    <h4>Reading Skills</h4>
                    <h4>Study Skills</h4>
                    <h4>Speech</h4>
                    <h4>Drama</h4>
                    </div>
            </div>
        </div>
    )
}

export default Home;