import React from 'react'
import { Nav, NavItem, NavLink as Link } from 'reactstrap';

const Courses = () => {
    return(
        <div className="coursesContainer">
            <img className="coursesImage" src="/courses.jpg"></img>
            <div className="centered">
            <h1>This 2020 - 2021 School Year, I will be offering 2 Literature courses</h1>
            <h2>on Tuesday's and Thursday's</h2>
            <Link href="/contact"><button className="btn btn-primary">Contact Me to Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Courses;