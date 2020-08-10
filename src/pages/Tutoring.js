import React from 'react'
import { Nav, NavItem, NavLink as Link } from 'reactstrap';

const Tutoring = () => {
    return(
        <div>
            <div className="imgContainer">
                <img className="coursesImage" src="/tutor.jpg"></img>
                <div className="imgOverlayer overlayer">
                <h3><b>I offer a variety of tutoring courses for grades K - 12th in subjects including English Language Arts, Writing and Reading skills, Math up to Algebra 1, Acting, Drama, and Public Speaking. <br></br> <b>Contact me to learn more about how I can help your child succeed in their area of study.</b></b></h3>
                <Link href="/contact"><button className="btn btn-primary">Contact Me to Sign Up</button></Link>
                </div>
            </div>
            <br></br>
            <br></br>
            <div >
                <h1><b>K - 8th Grade Private Tutoring</b></h1>
                <h4>Monday - Friday</h4>
                <h4>September 15, 2020 - May 27, 2021</h4>
                <br></br>
                <div className="coursesBody">
                <h1 className="coursesText coursesText2"><b>Available tutoring courses</b></h1><br></br>
                <div className="row">
                <div className="col-md-6 col-sm-12 mt-3">
                        <h4 className="coursesText2">✓ English Language Arts</h4>
                        <h4 className="coursesText2">✓ Math</h4>
                        <h4 className="coursesText2">✓ Social Studies</h4>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3 mb-3">
                        <h4 className="coursesText2">✓ Science</h4>
                        <h4 className="coursesText2">✓ Writing Skills</h4>
                        <h4 className="coursesText2">✓ Reading Skills</h4>
                    </div>
                </div>
                <br></br>
                <h3><b>I will not be offering tutoring on the following days<br></br> for the 2020 - 2021 school year</b></h3>
                <ul>
                     <h4>November 23, 2020, - November 30, 2020</h4>
                     <h4>December 18, 2020 - January 4,2021</h4>
                     <h4>April 2, 2021 - April 12, 2021</h4>
                </ul>
                   <br></br><h2>Private tutoring costs $35-50 / hour</h2><h6>**Sibling Discount Available**</h6><Link href="/contact"><button className="btn btn-primary">Contact Me to Sign Up</button></Link>
                </div>
            </div>
            <div >
                <h1><b>9th - 12th Grade Private Tutoring</b></h1>
                <h4>Monday - Friday</h4>
                <h4>September 15, 2020 - May 27, 2021</h4>
                <br></br>
                <div className="coursesBody">
                <h1 className="coursesText coursesText2"><b>Available tutoring courses</b></h1><br></br>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-3">
                        <h4 className="coursesText2">✓ English Language Arts</h4>
                        <h4 className="coursesText2">✓ Reading</h4>
                        <h4 className="coursesText2">✓ Writing Skills</h4>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3 mb-3">
                        <h4 className="coursesText2">✓ Math up to Algebra 1</h4>
                        <h4 className="coursesText2">✓ Acting Coaching and Public Speaking</h4>
                        <h4 className="coursesText2">✓ Study Skills</h4>
                    </div>
                </div>
                <br></br>
                <h3><b>I will not be offering tutoring on the following days<br></br> for the 2020 - 2021 school year</b></h3>
                <ul>
                     <h4>November 23, 2020, - November 30, 2020</h4>
                     <h4>December 18, 2020 - January 4,2021</h4>
                     <h4>April 2, 2021 - April 12, 2021</h4>
                </ul>
                   <br></br><h2>Private tutoring costs $35-50 / hour</h2><h6>**Sibling Discount Available**</h6><Link href="/contact"><button className="btn btn-primary">Contact Me to Sign Up</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Tutoring;