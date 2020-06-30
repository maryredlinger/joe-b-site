import React from 'react';
import EmailForm from './EmailForm.js'

const Contact = () => {
    return(
        <div className="ContactDisplay">
            
            <div className="contactContainer">
                <h3>Contact Me</h3>
                <EmailForm/>
            </div>
            <div >
                <h1>contact info</h1>
                <br></br>
                <div className="contactContainer2">
                    <div className="contactContainerLi">
                        <img className="contactIcon" src="./location.jpg"></img>
                        <h3>San Diego, CA</h3>
                    </div>
                    <br></br>
                    <div className="contactContainerLi">
                        <img className="contactIcon" src="./phone.jpg"></img>
                        <h3>619-555-5555</h3>
                    </div>
                    <br></br>
                    <div className="contactContainerLi">
                        <img className="contactIcon" src="./email.png"></img>
                        <h3>jbernens.bus@gmail.com</h3>
                    </div>
                    <br></br>
                    <div className="contactContainerLi">
                        <img className="contactIcon" src="./download.png"></img>
                        <h3>Download Tutor Flyer</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Contact;