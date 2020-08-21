import React from 'react'
import { Nav, NavItem, NavLink as Link } from 'reactstrap';

const Classes = () => {
    return(
        <div>
            <div className="imgContainer">
                <img className="coursesImage" src="/courses.jpg"></img>
                    <div className="btnFlex">
                <Link href="/classes/#introduction"><button className="btnTop btn btn-primary">Introduction to <br />Literature and Composition</button></Link>
                <Link href="/classes/#american"><button className="btn btn-primary btnTop">American Literature</button></Link>
                
                <Link href="/contact"><button className="btnTop btn btn-primary">Register for Course</button></Link>
                </div>
            </div>
            <br></br>
            <br></br>
            <div >
                <div id="introduction" className="coursesBody">
                    <h1 className="blue"><b>Introduction to Literature and Composition</b><br />                     <h3 className="black">This course meets Tuesday and Thursdays</h3></h1>
                        <h4>September 10, 2020 - December 17, 2020</h4>
                        <h4>&</h4>
                        <h4>January 5, 2021 - May 27, 2021</h4>
                        <br/>

                    
                    <h3>This year-long survey of literature features short stories, poetry, novels and drama. While effectively annotating texts and examining literary devices, students will practice writing fundamentals. Critical writing will include analytical essays, creative writing, reflective writing, use of MLA Style. Includes grammar review.</h3> 
                    <br />
                   
                
                <br />
                <div className="coursesText2">
                    <h2>Texts</h2>
                    <br />
                    <h4><li>Campbell, Janice, <i>Introduction to Literature: English 1</i></li></h4>
                    <h5>ISBN-10: 1613220235</h5>
                    <Link href="https://everydayeducation.com/products/e1-introduction-to-literature-english-1"><button className="btn btn-primary">View Book Online Here</button></Link>
                    <h4><li>Hanbury King,<i> Writing Skills Book 2, Grades 9-12,</i> Educators Publishing Service, Inc.</li></h4>
                    <h5>ISBN: 978-0-8388-2566-2 </h5>
                    <Link href="https://setonbooks.com/writing/1541-writing-skills-book-2-grades-7-8.html"><button className="btn btn-primary">View Book Online Here</button></Link>
                    <h4><li>Warriner's English Grammer and Composition, 4th Level, 1977 edition.</li></h4>
                    <h5>ISBN-13: 978-0153119033</h5>
                    <h4><li>Warriner's English Grammar & Composition 4th Course Text Key</li></h4>
                </div>
                <br></br>
                   <br></br><h2>This course costs $480 / semester</h2><h6>**Sibling Discount Available**</h6><Link href="/contact"><button className="btn btn-primary">Register for Course Here</button></Link><Link href="./Introduction.docx"><button className="btn btn-primary">View Course Brochure</button></Link>
                </div>

                <div id="american" className="coursesBody">
                <h1 className="blue"><b>American Literature</b><br />     <h3 className="black">This course meets Tuesday and Thursdays</h3></h1>
                        <h4>September 10, 2020 - December 17, 2020</h4>
                        <h4>&</h4>
                        <h4>January 5, 2021 - May 27, 2021</h4>
                        <br/>
                    <br />
                    <h3>This yearlong course surveys American literature through its literary periods. Through effective annotation of texts and examination of literary devices, students will engage in writing. Critical writing will include analytical essays, creative writing, reflective writing, use of MLA Style. </h3>               
                <div className="coursesText2">
                    <h2>Texts</h2>
                    <br />
                    <h4><li>Campbell, Janice, <i>American Literature: English 3</i></li></h4>
                    
                    <Link href="https://everydayeducation.com/products/e3-american-literature-english-3"><button className="btn btn-primary">View Book Online Here</button></Link>
                </div>
                   <br></br><h2>This course costs $480 / semester</h2><h6>**Sibling Discount Available**</h6><Link href="/contact"><button className="btn btn-primary">Register for Course Here</button></Link><Link href="./american.docx"><button className="btn btn-primary">View Course Brochure</button></Link>
                </div>

            </div>
        </div>
    )
}

export default Classes;