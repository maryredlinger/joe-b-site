import React from 'react';
import '../styles/About.css'

const About = () => {
    return(
        <div className="container">
            < br />
            <div className="row">
                <div className="col-md-6 col-sm-12 mt-3">
                    <img className="profileImg" src="./profile.png"/>
                </div>
                <div className="col-md-6 col-sm-12 mt-3 mb-3">
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
            <hr className="line-break"></hr>
            <h1 className="ed">- Education -</h1>
            <div className="edContainer">
                <div className="schoolContainer">
                    <h1 className="item">College</h1>
                    <p className="item">Location, Grad year lhahalkhd kaklhasl kjfhklFAH</p>
                    <p className="item">Degree</p>
                <br/>
                    <h1 className="item">College</h1>
                    <p className="item">Location, Grad year lhahalkhd kaklhasl kjfhklFAH</p>
                    <p className="item">Degree</p>
                < br/>
                    <h1 className="item">College</h1>
                    <p className="item">Location, Grad year lhahalkhd kaklhasl kjfhklFAH</p>
                    <p className="item">Degree</p>
                < br/>
                    <h1 className="item">College</h1>
                    <p className="item">Location, Grad year lhahalkhd kaklhasl kjfhklFAH</p>
                    <p className="item">Degree</p>
                </div>
            </div>
        </div>
    )
}

export default About;