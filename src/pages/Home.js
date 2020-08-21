import React from 'react';
import { NavLink as Link } from 'reactstrap';


const Home = () => {
    return(
        <div className="">
            <div className="imgContainer">
                <img src="./teacher.jpg" className="HomeImg wrapper"></img>
                <div className="imgOverlayer overlayer">
                    <h2 className="homeh2">High School classes starting <br/>September 10, 2020</h2>
                    {/*<h3 className="homeh3">This school year, I will be offering two High School level Literature classes on Tuesday's & Thursday's beginning September 10, 2020 and ending May 27, 2021</h3>*/}
                </div>
            </div>    
                                  
            <h1 className="topText"><b>Literature Classes</b></h1>
            <h4 className=""><b>Meeting on Tuesday's & Thursday's</b></h4>
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
                <Link href="/classes/#introduction"><h4 className="white"><li><b>Introduction to Literature and Composition</b></li></h4></Link>
                <br />
                <Link href="/classes/#american"><h4 className="white"><li><b>American Literature</b></li></h4></Link>
                
                
            
                </div>
                </div>
                <Link href="/classes"><button href="/classes" className="btn btn-primary ">Learn More</button></Link>
                <Link href="/contact"><buttonc className="btn btn-primary">Contact Me to Register</buttonc></Link>
            </div>

            <h1 className="topText"><b>Tutoring</b></h1>
            <h4 className=""><b>Year-round for grades 1st - 12th</b></h4>
            <div className="classesBox">
                <div className="row">
                <div className="col-md-6 col-sm-12 mt-3">
                    <h4 className="white coursesText2"><li>English Language Arts</li></h4>
                    <h4 className="white coursesText2"><li>Reading & Writing</li></h4>
                    <h4 className="white coursesText2"><li>Math</li></h4>
                    <h4 className="white coursesText2"><li>Science</li></h4>

                </div>
                <div className="col-md-6 col-sm-12 mt-3 mb-3">
                    <h4><li className="white coursesText2">Social Studies</li></h4>
                    <h4><li className="white coursesText2">Test Prep & Study Skills</li></h4>
                    <h4><li className="white coursesText2">Acting & Public Speaking</li></h4>
                    <h4><li className="white coursesText2">Theatre & Drama</li></h4>
                </div>
                </div>
                <Link href="/tutoring"><button className="btn btn-primary ">Learn More</button></Link>
                <Link href="/contact"><buttonc className="btn btn-primary">Contact Me for Availability</buttonc></Link>

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