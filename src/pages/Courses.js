import React from 'react'
import { Nav, NavItem, NavLink as Link } from 'reactstrap';

const Courses = () => {
    return(
        <div>
            <div className="imgContainer">
                <img className="coursesImage" src="/courses.jpg"></img>
                    <div className="btnFlex">
                <Link href="#introduction"><button className="btnTop btn btn-primary">Introduction to <br />Literature and Composition</button></Link>
                <Link href="#american"><button className="btn btn-primary btnTop">American Literature</button></Link>
                
                <Link href="/contact"><button className="btnTop btn btn-primary">Contact Me to Sign Up</button></Link>
                </div>
            </div>
            <br></br>
            <br></br>
            <div >
                <h1><b>Tuesday's & Thursday's Literature Courses</b></h1>
                <h4>September 10, 2020 - December 17, 2021</h4>
                <h4>&</h4>
                <h4>January 5, 2021 - May 27, 2021</h4>
                <br></br>
                <div id="introduction" className="coursesBody">
                    <h1 className="blue"><b>Introduction to Literature and Composition</b></h1>
                    <br />
                    <h3><b>This year-long survey of literature  features short stories, poetry, novels and drama. While effectively annotating texts and examining literary devices, students will practice writing fundamentals. Critical writing will include analytical essays, creative writing, reflective writing, use of MLA Style. Includes grammar review.</b></h3> <br /> <br />
                <h1 className="coursesText coursesText2 bigFont"><b>What we will cover</b></h1>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-3">
                        <h4 className="coursesText2">✓ Short Stories & Poetry</h4>
                        <h4 className="coursesText2">✓ Novels & Drama</h4>
                        <h4 className="coursesText2">✓ Analytical Essays</h4>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3 mb-3">
                        <h4 className="coursesText2">✓ Creative Writing</h4>
                        <h4 className="coursesText2">✓ Reflective Writing</h4>
                        <h4 className="coursesText2">✓ MLA & Grammar Review</h4>
                    </div>
                    <br />
                   
                </div>
                <br />
                <div className="coursesText2">
                    <h1><b>Texts</b></h1>
                    <br />
                    <h3><li>Campbell, Janice, <i>Introduction to Literature: English 1</i></li></h3>
                    <Link href="https://everydayeducation.com/products/e1-introduction-to-literature-english-1"><button className="btn btn-primary">View Book Online Here</button></Link>
                    <h3><li>Hanbury King,<i> Writing Skills Book 3, Grades 9-12,</i> Educators Publishing Service, Inc.</li></h3>
                    <h3><li>Warriner's English Grammer and COmposition, 4th Level, 1977 edition.</li></h3>
                    <br />
                    <h3>ISBN-13: 978-0153119033</h3>
                    <h3>ISBN-10: 978-0153119039</h3>
                </div>
                <br></br>
                <br />
                <br />
                <h3><b>With flexibility to add additional days off,<br></br> the current holidays and times off over these two semesters include</b></h3>
                <ul>
                     <h4>November 23, 2020, - November 30, 2020</h4>
                     <h4>December 18, 2020 - January 4,2021</h4>
                     <h4>April 2, 2021 - April 12, 2021</h4>
                </ul>
                   <br></br><h2>This course costs $480 / semester</h2><h6>**Sibling Discount Available**</h6><Link href="/contact"><button className="btn btn-primary">Contact Me to Sign Up</button></Link><Link href="./Introduction.docx"><button className="btn btn-primary">View Course Brochure</button></Link>
                </div>

                <div id="american" className="coursesBody">
                <h1 className="blue"><b>American Literature</b></h1>
                    <br />
                    <h3><b>This yearlong course surveys American literature through its literary periods. Through effective annotation of texts and examination of literary devices, students will engage in writing. Critical writing will include analytical essays, creative writing, reflective writing, use of MLA Style. </b></h3><br /><br />
                <h1 className="coursesText coursesText2 bigFont"><b>What we will cover</b></h1>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-3">
                        <h4 className="coursesText2">✓ American Literature</h4>
                        <h4 className="coursesText2">✓ Annotation</h4>
                        <h4 className="coursesText2">✓ Literary Devices</h4>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3 mb-3">
                        <h4 className="coursesText2">✓ Analytical Essays</h4>
                        <h4 className="coursesText2">✓ Creative Writing</h4>
                        <h4 className="coursesText2">✓ Reflective Writing</h4>
                    </div>
                </div>
                <br></br>
                <br />
                <div className="coursesText2">
                    <h1><b>Texts</b></h1>
                    <br />
                    <h3><li>Campbell, Janice, <i>American Literature: English 3</i></li></h3>
                    <Link href="https://everydayeducation.com/products/e3-american-literature-english-3"><button className="btn btn-primary">View Book Online Here</button></Link>
                </div>
                <br></br>
                <br />
                <br />
                <h3><b>With flexibility to add additional days off,<br></br> the current holidays and times off over these two semesters include</b></h3>
                <ul>
                     <h4>November 23, 2020, - November 30, 2020</h4>
                     <h4>December 18, 2020 - January 4,2021</h4>
                     <h4>April 2, 2021 - April 12, 2021</h4>
                </ul>
                   <br></br><h2>This course costs $480 / semester</h2><h6>**Sibling Discount Available**</h6><Link href="/contact"><button className="btn btn-primary">Contact Me to Sign Up</button></Link><Link href="./american.docx"><button className="btn btn-primary">View Course Brochure</button></Link>
                </div>

            </div>
        </div>
    )
}

export default Courses;