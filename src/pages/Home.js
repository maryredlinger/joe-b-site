import React from 'react';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';


const Home = () => {
    return(
        <div className="App">
            <div>
                <img className="HomeImg" src="teacher.jpg"></img>
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
            <div className="homeBox">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default Home;