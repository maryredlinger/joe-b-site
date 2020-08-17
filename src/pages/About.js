import React from 'react';
import '../styles/About.css'

const About = () => {
    return(
        <div className="container">
            < br />
            <div className="row">
               {/* <div className="col-md-4 col-sm-12 mt-3">
                    <img className="profileImg" src="./profile.png"/>
    </div>
    <div className="col-md-8 col-sm-12 mt-3 mb-3">*/}
                    <div>
                    <br /><br />
                    <h3 className="profileTxt">First and foremost, I preach Jesus, my Lord, Savior, and First Teacher. I serve Him by 
                    serving His children. My life and ministry are a perpetual gift to Him, and to His Mother, to whom I consecrate this whole endeavor. <br /><br />
                    I teach the curriculum to standard. I teach to mastery, using practice and drill, research and collaborative projects, and a variety of assessments to check for mastery. I remediate when necessary. 
                    I endeavor to teach to the whole person, meeting the students’ emotional, mental, psychological, and spiritual needs, employing the help of my colleagues when necessary.<br /><br /> 
                    Educating the whole student includes citizenship, leadership, and creativity, which allows for exploration, collaboration, teamwork, and problem-solving. I try to provide opportunities for each in my classroom, mindful that citizenship and leadership often are quietly modeled.  <br /><br />
                    I communicate and employ clear rubrics on assignments. 
                    Students thrive in an environment where they feel safe, boundaries are enforced and respected, and consequences are fairly dispensed. More importantly, I try to create a positive environment where each student’s dignity is respected. 
                    </h3>
                </div>
            </div>
            <div className="linkContainer">
                <a target="_blank" href="./resume.pdf"><h3>Resume</h3></a>
                <a href="#credentials"><h3>Credentials</h3></a>
                <a href="#education"><h3>Education</h3></a>
                <a href="#experience"><h3>Experience</h3></a>
            </div>
            <hr className="line-break"></hr>
            <h1 id="credentials" className="cred">- Credentials -</h1>
            <div className="edContainer">
                <div className="schoolContainer">
                    <h3 className="credentials">California Clear Single Subject Teaching Credential, English, K-12 California</h3>
                    <br />
                    <h3 className="credentials">Clear Specialist Instruction Credential in Special Education, Learning Handicapped</h3>
                </div>
            </div>
            <h1 id="education" className="ed">- Education -</h1>
            <div className="edContainer">
                <div className="schoolContainer">
                    <h1 className="item"><a target="_blank" href="https://www.sdsu.edu/"><b>San Diego State University</b></a></h1>
                    <h3 className="item">San Diego, CA</h3>
                    <p className="item">Master of Arts in Education, emphasis in Learning Handicaps</p>
                    <p className="item"> Postgraduate studies in English, emphasis in Drama</p>
                    <p className="item">College of Education Credential Program</p>

                <br/>
                    <h1 className="item"><a target="_blank" href="https://www.sandiego.edu/"><b>University of San Diego</b></a></h1>
                    <h3 className="item">San Diego, CA</h3>
                    <p className="item">Bachelor of Arts in Philosophy, minor in Religious Studies</p>
                < br/>
                    <h1 className="item"><a target="_blank" href="https://www.fst.edu/"><b>Franciscan School of Theology</b></a></h1>
                    <h3 className="item">Oceanside, CA</h3>
                    <p className="item">Masters of Theology *<i> in progress*</i></p>
                < br/>
                    <h1 className="item"><a target="_blank" href="https://www.csueastbay.edu/"><b>California State University East Bay</b></a></h1>
                    <h3 className="item">East Bay, CA</h3>
                    <p className="item">Master's Workshops/ Continuing Education through California Educational Theatre Association and Educational Theatre Association</p>
                </div>
            </div>
            <h1 id="experience" className="ed">- Experience -</h1>
            <div className="expContainer">
                <div className="expContainer">
                    <h1 className="itemExp h1"><a target="_blank" href="./tutor_owl.pdf"><b>Tutor</b></a></h1>
                    <h3 className="itemExp">San Diego, CA</h3>
                    <h4 className="itemExp">All grade levels, all subjects, specializing in :</h4>
                    <ul>
                        <li className="itemExp">Algebra</li>
                        <li className="itemExp">World Religions</li>
                        <li className="itemExp">English / Language Arts</li>
                        <li className="itemExp">Speech</li>
                        <li className="itemExp">Study SKills</li>
                        <li className="itemExp">Theatre</li>
                    </ul>
                <br/>
                    <h1 className="itemExp h1"><a target="_blank" href="http://olshsd.weebly.com/"><b>Our Lady of the Sacred Heart School</b></a></h1>
                    <h3 className="itemExp">San Diego, CA</h3>
                    <ul>
                        <li className="itemExp">8th Grade Homeroom Teacher | 2016 - 2018</li>
                        <li className="itemExp">6th Grade Homeroom Teacher | 2016 - 2017</li>
                        <li className="itemExp">Middle School Social Studies | 2016 - 2018</li>
                        <li className="itemExp">Middle School English | 2018</li>
                        <li className="itemExp">Middle School Religion | 2016 - 2017</li>
                    </ul>
                    <br/>
                    <h1 className="itemExp h1"><a target="_blank" href="https://www.sahs.org/"><b>St. Augustine High School</b></a></h1>
                    <h3 className="itemExp">San Diego, CA</h3>
                    <ul>
                        <li className="itemExp">Religion Teacher | 1991 - 2015</li>
                        <li className="itemExp">Theatre Arts Teacher / Program Director | 2009 - 2015</li>
                        <li className="itemExp">Intersession Teacher | 2009 - 2015</li>
                        <li className="itemExp">English Teacher | 1991 - 1992</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;