import React from 'react';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';


const Home = () => {
    return(
        <div className="App">
            <div>
                <img className="HomeImg" src="teacher.jpg"></img>
            </div>
            <br></br>
            <div className="HomeDisplay">
                <span>
                    <h3>-Education & Certifications-</h3>
                    <Link href="/about-me"><img src="education.png"></img></Link>
                    <Link href="/about-me">View certifications. →</Link>
                </span>
                <span>
                    <h3>-Tutoring Courses & curriculum-</h3>
                    <Link href="/curriculum"><img src="curriculum.png"></img></Link>
                    <Link href="/curriculum">View curriculum. →</Link>
                </span>
                <span>
                    <h3>-Contact Information-</h3>
                    <Link href="/contact"><img src="contact.png"></img></Link>
                    <Link href="/contact">View contact information. →</Link>
                </span>
            </div>
            <div className="homeBox">
                <p>First and foremost, I preach Jesus, my Lord, Savior, and First Teacher. I serve Him by 
serving His children. My life and ministry are a perpetual gift to Him, and to His Mother, to whom I consecrate this whole endeavor. 
I teach the curriculum to standard. I teach to mastery, using practice and drill, research and collaborative projects, and a variety of assessments to check for mastery. I remediate when necessary. 
I endeavor to teach to the whole person, meeting the students’ emotional, mental, psychological, and spiritual needs, employing the help of my colleagues when necessary. 
Educating the whole student includes citizenship, leadership, and creativity, which allows for exploration, collaboration, teamwork, and problem-solving. I try to provide opportunities for each in my classroom, mindful that citizenship and leadership often are quietly modeled.  
I communicate and employ clear rubrics on assignments. 
Students thrive in an environment where they feel safe, boundaries are enforced and respected, and consequences are fairly dispensed. More importantly, I try to create a positive environment where each student’s dignity is respected. 
</p>
            </div>
        </div>
    )
}

export default Home;