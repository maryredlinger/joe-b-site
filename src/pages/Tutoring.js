import React from 'react'
import { Nav, NavItem, NavLink as Link } from 'reactstrap';

const Tutoring = () => {
    return(
        <div>
            <div className="imgContainer">
                <img className="coursesImage" src="/tutor.jpg"></img>
                <div className="btnFlex">
                <Link href="/tutoring/#k-8"><button className="btnTop btn btn-primary">1st - 6th Grade <br />Private Tutoring</button></Link>
                <Link href="/tutoring/#9-12"><button className="btn btn-primary btnTop">7th -12th Grade <br />Private Tutoring</button></Link>
                
                <Link href="/contact"><button className="btnTop btn btn-primary">Contact Me for Availability</button></Link>
                </div>
            </div>
            <br></br>
            <br></br>
            <div id="k-8" >
                <div className="coursesBody">
                    <h1 className="blue"><b>1st - 6th Grade Private Tutoring</b></h1>
                <h2 className=" coursesText2">Multiple subjects available to include but not limited to: </h2><br></br>
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
                   <br></br><h2>Private tutoring costs $35 / hour</h2><h6>**Sibling Discount Available**</h6><Link href="/contact"><button className="btn btn-primary">Contact Me for Availability</button></Link>
                </div>
            </div>
            <div id="9-12" >
                <div className="coursesBody">
                <h1 className="blue"><b>7th - 12th Grade Private Tutoring</b></h1>
                <h2 className=" coursesText2">Multiple subjects available to include but not limited to: </h2><br></br>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-3">
                        <h4 className="coursesText2">✓ English Language Arts</h4>
                        <h4 className="coursesText2">✓ Literature</h4>
                        <h4 className="coursesText2">✓ Reading Skills</h4>
                        <h4 className="coursesText2">✓ Writing Skills</h4>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3 mb-3">
                        <h4 className="coursesText2">✓ Math up to Algebra 1</h4>
                        <h4 className="coursesText2">✓ Acting & Public Speaking Coaching</h4>
                        <h4 className="coursesText2">✓ Study Skills</h4>
                        <h4 className="coursesText2">✓ Test Preparation</h4>
                    </div>
                </div>
                   <br></br><h2>Private tutoring costs $50 / hour</h2><h6>**Sibling Discount Available**</h6><Link href="/contact"><button className="btn btn-primary">Contact Me for Availability</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Tutoring;