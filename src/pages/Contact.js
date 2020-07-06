import React from 'react';
import EmailForm from './EmailForm.js'

const Contact = () => {
    return(
        <div className="ContactDisplay">
            
            <div className="contactContainer">
                <h3>Contact Me</h3>
                <br></br>
                <EmailForm/>
            </div>
            <div >
                <h3>Contact Information</h3>
                
                <div className="contactContainer2">
                    <div className="contactContainerLi">
                        <img className="contactIcon" src="./location.png"></img>
                        <h3 className="downloadColor">San Diego, CA</h3>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="contactContainerLi">
                        <a href="tel:619-347-0250"><img className="contactIcon" src="./phone.png"></img></a>
                        <a href="tel:619-347-0250"><img className="phoneNum" src="./phonenum.png"></img></a>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="contactContainerLi">
                        <a href="mailto:jbernens.bus@gmail.com.?subject=Coming From Your Website" target="_blank"><img className="contactIcon" src="./email.png"></img></a>
                        <a href="mailto:jbernens.bus@gmail.com.?subject=Coming From Your Website" target="_blank"><img className="phoneNum" src="./emailpic.png"></img></a>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="contactContainerLi">
                        <a href="./tutor_owl.pdf" target="_blank">
                        <img className="contactIcon" src="./download.png"></img></a>
                        <a href="./tutor_owl.pdf" target="_blank">
                        <h3 className="downloadColor">Download Tutor Flyer</h3></a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Contact;