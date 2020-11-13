import React from 'react';
import '../styles/About.css'

const About = () => {
    return(
        <div className="container">
            < br />
            <div>
            {/*
            <div className="row">
                <div className="col-md-4 col-sm-12 mt-3">
                    <img className="profileImg" src="./profile.png"/>
    </div>
    <div className="col-md-8 col-sm-12 mt-3 mb-3">*/}
                    <div className="expContainer">
                        <h1 className="blue2"><b>Athanasius Academia</b></h1>
                        <h4 className="blue2"> - San Diego CA -</h4>
                        <h3 className="itemExp">Athanasius Academia offers homeschooling families tutoring and courses to supplement their studies.  It provides a safe environment that engages students and encourages them strive for excellence.  Classes meet graduation standards of California.  I partner with the parent to ensure the class is tailored to meet their child’s needs. Classes are offered both in the home and/or online.  <h4><a href="/classes"><i>Please see the Offerings - Classes Tab for current offerings.</i></a></h4></h3>
                        <br />
                    </div>
                    <div className="expContainer">
                        <h1 className="blue2"><b>About My Namesake</b></h1>

                        <h3 className="itemExp">St. Athanasius was a strong leader and bishop of the 4th century Church. He stood for the truth. He was present at the Council of Nicaea, called by the Emperor Constantine in 325 A.D., where he spoke eloquently against the heresy of Arianism.  Athanasius’ fortitude is an inspiration to me and for my work as a teacher.</h3>
                        <br/><br/>
                </div>
            </div>
            
        </div>
    )
}

export default About;