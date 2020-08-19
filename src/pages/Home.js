import React from 'react';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';


const Home = () => {
    return(
        <div className="">
            <div className="imgContainer">
                <img src="./teacher.jpg" className="HomeImg wrapper"></img>
                <div className="imgOverlayer overlayer">
                    <h2 className="homeh2">Classes starting September 10, 2020</h2>
                    <h3 className="homeh3">This school year, I will be offering two High School level Literature classes on Tuesday's & Thursday's beginning September 10, 2020 and ending May 27, 2021</h3>
                </div>
            </div>    
            <br /><br /><br />  <br /><br /><br />                      
            <h1 className="topText"><b>Tuesday & Thursday Literature Classes</b></h1>
            <div className="classesBox">
                <div className="row">
                <div className="col-md-6 col-sm-12 mt-3">
                <h4 className="semesterText">1st Semester</h4>
                    <h2 className="classesText">September 10, 2020 - December 17, 2020</h2>
                    <br></br>
                    <h4 className="semesterText">2nd Semester</h4>
                    <h2 className="classesText">January 5, 2021 - May 27, 2021</h2>
                </div>
                <div className="col-md-6 col-sm-12 mt-3 mb-3">
                <br />
                <Link href="/classes/#introduction"><h2 className="classesText"><li><b>Introduction to Literature and Composition</b></li></h2></Link>
                <br />
                <Link href="/classes/#american"><h3 className="classesText"><li><b>American Literature</b></li></h3></Link>
                
                
            
                </div>
                </div>
                <Link href="/classes"><button href="/classes" className="btn btn-primary ">Learn More</button></Link>
            </div>

            <h1 className="topText"><b>Monday - Friday Tutoring</b></h1>
            <div className="classesBox">
                <div className="row">
                <div className="col-md-6 col-sm-12 mt-3">
                    <h2 className="classesText">September 10, 2020 - December 17, 2020</h2>
                    <br></br>

                    <h2 className="classesText">January 5, 2021 - May 27, 2021</h2>
                </div>
                <div className="col-md-6 col-sm-12 mt-3 mb-3">
                <h3 className="classesText">I offer year round tutoring for grades K-12 in multiple subjects up to 8th grade and ELA, reading, writing, up to Algebra 1,study skills, public speaking, and acting for High School  </h3>
                </div>
                </div>
                <Link href="/tutoring"><button className="btn btn-primary ">Learn More</button></Link>
            </div>
            
            <br></br>
            <div className="HomeDisplay">
                <span>
                    <h3>-Education & Certifications-</h3>
                    <Link href="/about"><img src="education.png"></img></Link>
                    <Link href="/about">View Certifications. →</Link>
                </span>
                <span>
                    <h3>-Classes & Tutoring-</h3>
                    <Link><img src="curriculum.png"></img></Link>
                    <Link href="/classes">View classes. →</Link>
                    <Link href="/tutoring">View Tutoring. →</Link>
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