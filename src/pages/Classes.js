import React from 'react'
import { NavLink as Link } from 'reactstrap';

const Classes = () => {
    return(
        <div>
            <div className="imgContainer">
                <img alt="coursesImage" className="coursesImage" src="/courses.jpg"></img>
                    <div className="btnFlex">
                        <Link href="/classes/#introduction">
                            <button id="button" >Introduction to <br />Literature and Composition</button>
                            </Link>
                        <Link href="/classes/#american">
                            <button id="bigger_button">American Literature</button>
                        </Link>
                        
                        <Link href="/contact">
                            <button id="bigger_button" >Register for Course</button>
                        </Link>
                    </div>
            </div>
            <br></br>
            <br></br>
            <div >
                <div id="introduction" className="coursesBody">
                    <h1 className="blue"><b>Introduction to Literature and Composition</b><br />               
                    <h3 className="black">This course meets Tuesday and Thursdays</h3></h1>
                    <h4>September 10, 2020 - December 17, 2020</h4>
                    <h4>&</h4>
                    <h4>January 5, 2021 - May 27, 2021</h4>
                    <br/>
                    <h3>This year-long survey of literature features short stories, poetry, novels and drama. While effectively annotating texts and examining literary devices, students will practice writing fundamentals. Critical writing will include analytical essays, creative writing, reflective writing, use of MLA Style. Includes grammar review.</h3> 
                    <br />
                    <br />
                    <div className="coursesText2">
                        <h2><b>Texts</b></h2>
                        <br />
                        <h4><li>Campbell, Janice, <i>Introduction to Literature: English 1</i></li></h4>
                        <h5>ISBN-10: 1613220235</h5>
                        <div className="bookFlex">
                            <Link href="https://everydayeducation.com/products/e1-introduction-to-literature-english-1">
                                <button id="button_book" >Everyday Education</button>
                            </Link>
                            <Link href="https://www.ebay.com/itm/203083976537?chn=ps&norover=1&mkevt=1&mkrid=711-117182-37290-0&mkcid=2&itemid=203083976537&targetid=935694488106&device=c&mktype=pla&googleloc=9061215&poi=&campaignid=10828927432&mkgroupid=110336956527&rlsatarget=pla-935694488106&abcId=9300396&merchantid=6296724&gclid=Cj0KCQjws536BRDTARIsANeUZ589yKOpo0HPveSpB3uzQYSeQmcfxD_t-xjyKDXAasXp7Qk0pYfZ0ugaAo3BEALw_wcB">
                                <button id="button_book" >Ebay</button>
                            </Link>
                        </div>
                        <h4><li>Hanbury King,<i> Writing Skills Book 3, </i> Educators Publishing Service, Inc.</li></h4>
                        <h5>ISBN: 978-0-8388-2566-2 </h5>
                        <div className="bookFlex">
                            <Link href="https://setonbooks.com/writing/1550-writing-skills-book-3-grades-9-12.html">
                                <button id="button_book" >Everyday Education</button>
                            </Link>
                            <Link href="https://www.ebay.com/itm/EPS-Writing-Skills-Book-3-by-Diana-Hanbury-King-NEW-PAPERBACK-FREE-SHIPPING/303540547850?epid=5962146&hash=item46ac6d310a:g:ijMAAOSwdXheleCQ">
                                <button id="button_book" >Ebay</button>
                            </Link>
                            <Link href="https://www.amazon.com/Writing-Skills-Dianna-Hanbury-King/dp/0838820522/ref=sr_1_1?dchild=1&keywords=Writing+Skills+Book+3&qid=1599773402&s=books&sr=1-1">
                                <button id="button_book" >Amazon</button>
                            </Link>
                        </div>
                        <h4><li>Warriner's English Grammar and Composition, 4th Level, 1977 edition.</li></h4>
                        <h5>ISBN-13: 978-0153119033</h5>
                        <div className="bookFlex">
                        <Link href="https://www.ebay.com/p/2523177?iid=143515569659&chn=ps&norover=1&mkevt=1&mkrid=711-117182-37290-0&mkcid=2&itemid=143515569659&targetid=941893663842&device=c&mktype=pla&googleloc=9061215&poi=&campaignid=10832533886&mkgroupid=113472711784&rlsatarget=pla-941893663842&abcId=9300397&merchantid=107435593&gclid=Cj0KCQjws536BRDTARIsANeUZ5-vj5JmmFgv-ZN0vphOoFzKI4Lrzezsj9K0lYDUZQHqZFTr-3vXe1saApM_EALw_wcB"><button id="button_book" >Ebay</button></Link>
                        <Link href="https://www.amazon.com/Warriners-English-Grammar-Composition-Course/dp/0153119039"><button id="button_book" >Amazon</button></Link>
                        </div>
                        <h4><li>Warriner's English Grammar & Composition 4th Course Text Key <b className="blue">*OPTIONAL </b></li></h4>
                        <div className="bookFlex">
                        <Link href="https://setonbooks.com/english/1610-warriner-s-english-grammar-composition-4th-course-text-key.html"><button id="button_book" >Seaton</button></Link>
                        </div>
                    </div>
                <br></br>
                   <br></br><h2>$480 / semester</h2><h6>**Sibling Discount Available**</h6><Link href="/contact"><button id="button_hover" >Register for Course</button></Link><Link href="./Introduction.docx"><button id="button_hover" >View Course Brochure</button></Link>
                </div>

                <div id="american" className="coursesBody">
                <h1 className="blue"><b>American Literature</b><br />
                     <h3 className="black">This course meets Tuesday and Thursdays</h3>
                </h1>
                <h4>September 10, 2020 - December 17, 2020</h4>
                <h4>&</h4>
                <h4>January 5, 2021 - May 27, 2021</h4>
                <br/>
                <br />
                <h3>This yearlong course surveys American literature through its literary periods. Through effective annotation of texts and examination of literary devices, students will engage in writing. Critical writing will include analytical essays, creative writing, reflective writing, use of MLA Style. </h3> 
                <br />              
                <div className="coursesText2">
                    <h2><b>Texts</b></h2>
                    <br />
                    <h4>
                        <li>Campbell, Janice, <i>American Literature: English 3</i></li>
                    </h4>
                    <div className="bookFlex">
                        <Link href="https://everydayeducation.com/products/e3-american-literature-english-3">
                            <button id="button_book" >Everyday Education</button>
                        </Link>
                        <Link href="https://www.christianbook.com/excellence-in-literature-american/janice-campbell/9781623411855/pd/411855">
                            <button id="button_book" >Christian Book</button>
                        </Link>
                    </div>
                </div>
                   <br></br>
                   <h2><b>$480 / semester</b></h2>
                   <h6>**Sibling Discount Available**</h6>
                   <Link href="/contact">
                       <button  id="button_hover">Register for Course</button>
                    </Link>
                    <Link href="./american.docx">
                        <button  id="button_hover">View Course Brochure</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Classes;