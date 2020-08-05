import React from 'react';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';


const Home = () => {
    return(
        <div className="">
            <div className="imgContainer">
                <img src="./teacher.jpg" className="HomeImg wrapper"></img>
                <div className="imgOverlayer overlayer">
                    <h2 className="homeh2">Classes starting September 15, 2020</h2>
                    <h3 className="homeh3">This school year, I will be offering 2 Literature courses on Tuesday's & Thursday's beginning September 15, 2020 and ending May 27, 2021</h3>
                </div>
            </div>                
            <h1 className="topText"><b>Literature Classes</b></h1>
            <div className="classesBox">
                <div className="row">
                <div className="col-md-6 col-sm-12 mt-3">
                <h4 className="semesterText">1st Semester</h4>
                    <h2 className="classesText">September 15, 2020 - December 17, 2020</h2>
                    <br></br>
                    <h4 className="semesterText">2nd Semester</h4>
                    <h2 className="classesText">January 5, 2020 - May 27, 2020</h2>
                </div>
                <div className="col-md-6 col-sm-12 mt-3 mb-3">
                <h3 className="classesText">This school year, I will be offering 2 Literature courses on Tuesday's & Thursday's beginning September 15, 2020 and ending May 27, 2021</h3>
                </div>
                </div>
                <Link href="/courses"><button href="/courses" className="btn btn-primary classesButton">Learn More</button></Link>
            </div>

            <h1 className="topText"><b>Tutoring</b></h1>
            <div className="classesBox">
                <div className="row">
                <div className="col-md-6 col-sm-12 mt-3">
                    <h2 className="classesText">September 15, 2020 - December 17, 2020</h2>
                    <br></br>

                    <h2 className="classesText">January 5, 2020 - May 27, 2020</h2>
                </div>
                <div className="col-md-6 col-sm-12 mt-3 mb-3">
                <h3 className="classesText">I offer year round tutoring for ages K-12 in multiple sUbjects up to 8th grade and ELA, reading, writing, up to Algebra 1,study skills, publick speaking, and acting for High School  </h3>
                </div>
                </div>
                <Link href="/tutoring"><button className="btn btn-primary classesButton">Learn More</button></Link>
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