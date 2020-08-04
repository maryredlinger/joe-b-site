import React from 'react';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';


const Home = () => {
    return(
        <div className="">
            <div className="imgContainer">
                <img src="./teacher.jpg" className="HomeImg wrapper"></img>
                <div className="imgOverlayer overlayer">
                    <h2 className="homeh2">Mr. Joseph Bernens, M.A. ED</h2>
                    <h3 className="homeh3">Teacher for 28+ years</h3>
                    <h3 className="homeh3">Fully credentialed including Special Ed.</h3>
                </div>
            </div>                
            
            
            <br></br>
            <div className="HomeDisplay">
                <span>
                    <h3>-Education & Certifications-</h3>
                    <Link href="/about"><img src="education.png"></img></Link>
                    <Link href="/about">View Certifications. →</Link>
                </span>
                <span>
                    <h3>-Tutoring Courses & Curriculum-</h3>
                    <Link href="/courses"><img src="curriculum.png"></img></Link>
                    <Link href="/courses">View Courses. →</Link>
                </span>
                <span>
                    <h3>-Contact Information-</h3>
                    <Link href="/contact"><img src="contact.png"></img></Link>
                    <Link href="/contact">View Contact Information. →</Link>
                </span>
            </div>
        </div>
    )
}

export default Home;