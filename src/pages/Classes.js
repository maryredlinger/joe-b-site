import React from 'react'
import { Nav, NavItem, NavLink as Link } from 'reactstrap';

const Classes = () => {
    return(
        <div>
            <div className="imgContainer">
                <img className="coursesImage" src="/courses.jpg"></img>
                <div className="imgOverlayer overlayer ">
                <h3><b>This school year I will be offering 2 Literature courses focused on BLAH BLAH BLAH and BLAH. The courses will meet at BLAH on every Tuesday and Thursday of the week.</b></h3>
                <Link href="/contact"><button className="btn btn-primary">Contact Me to Sign Up</button></Link>
                </div>
            </div>
            <br></br>
            <br></br>
            <div >
                <h1><b>Tuesday's & Thursday's Literature Course</b></h1>
                <h4>September 15, 2020 - December 17, 2021</h4>
                <h4>&</h4>
                <h4>January 5, 2021 - May 27, 2021</h4>
                <br></br>
                <div className="coursesBody">
                <h1 className="coursesText coursesText2"><b>What we will cover</b></h1><br></br>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-3">
                        <h4 className="coursesText2">✓ English</h4>
                        <h4 className="coursesText2">✓ English</h4>
                        <h4 className="coursesText2">✓ Literature</h4>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3 mb-3">
                        <h4 className="coursesText2">✓ Literature</h4>
                        <h4 className="coursesText2">✓ English</h4>
                        <h4 className="coursesText2">✓ Writing</h4>
                    </div>
                </div>
                <br></br>
                <h3><b>With flexibility to add additional days off,<br></br> the current days off over these two semesters include</b></h3>
                <ul>
                     <h4>November 23, 2020, - November 30, 2020</h4>
                     <h4>December 18, 2020 - January 4,2021</h4>
                     <h4>April 2, 2021 - April 12, 2021</h4>
                </ul>
                   <br></br><h2>This course costs $480 / semester</h2><h6>**Sibling Discount Available**</h6><Link href="/contact"><button className="btn btn-primary">Contact Me to Sign Up</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Classes;