import React from 'react';
import { NavLink as Link } from 'reactstrap';


const Home = () => {
    return(
        <div className="">
            <div className="imgContainer">
                <img src="./teacher.jpg" className="HomeImg wrapper"></img>
                <div className="imgOverlayer overlayer">
                    <h2 className="responsiveText">Mr. Joseph Bernens, M.A. ED</h2>
                    <h4 className="responsiveText2">Teacher & Tutor for 28+ years</h4>
                    <h5 className="responsiveText3">Fully credentialed including Special Ed.</h5>
                </div>
            </div>    
                                  
            <h1><b>High School classes starting <br/>September 10, 2020</b></h1>
            <h1 className="topText ">Literature Classes</h1>
            <h4 className="">Meeting on Tuesdays & Thursdays</h4>
            <div className="classesBox">
                <div className="row">
                <div className="col-md-6 col-sm-12 mt-3">
                <h4 className="semesterText">1st Semester</h4>
                    <h3 className="classesText">September 10, 2020 - December 17, 2020</h3>
                    <br></br>
                    <h4 className="semesterText">2nd Semester</h4>
                    <h3 className="classesText">January 5, 2021 - May 27, 2021</h3>
                </div>
                <div className="col-md-6 col-sm-12 mt-3 mb-3">
                <br />
                <Link href="/classes/#introduction"><h4 className="white"><li>Introduction to Literature and Composition</li></h4></Link>
                
                <Link href="/classes/#american"><h4 className="white"><li>American Literature</li></h4></Link>
                
                
            
                </div>
                </div>
                <Link href="/classes"><button href="/classes" className="btn btn-primary ">Learn More</button></Link>
                <Link href="/contact"><buttonc className="btn btn-primary">Contact Me to Register</buttonc></Link>
            </div>

            <h1 className="topText ">Tutoring</h1>
            <h4 className="">Year-round for grades 1st - 12th</h4>
            <div className="classesBox">
                {/*
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-3">
                        <h4 className="white coursesText2"><li>English Language Arts</li></h4>
                        <h4 className="white coursesText2"><li>Reading & Writing</li></h4>

                    </div>
                    <div className="col-md-6 col-sm-12 mt-3 mb-3">
                        <h4><li className="white coursesText2">Test Prep & Study Skills</li></h4>
                        <h4><li className="white coursesText2">And More!</li></h4>
                    </div>
                </div>
                */}
                <h3 className="white">Tutoring offered in multiple subjects and grade levels.</h3>
                <br />
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