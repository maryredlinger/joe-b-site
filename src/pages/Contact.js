import React from 'react';
import Email from './Email'

const Contact = () => {
    return(
        <div className="ContactDisplay">
            
            <div className="contactContainer">
                <Email/>{/*
                <h2>Registering for a Course<br/>or<br/>Tutor Availability</h2>
                <br/><br/>
                <h3>Download either the Word Doc. file or the PDF version</h3>
                <h3>Fill out the form and attach it to your email</h3>
                <h3>Send email to <a href="mailto:jbernens.bus@gmail.com.?subject=Coming From Your Website" target="_blank" rel="noopener noreferrer">jbernens.bus@gmail.com</a></h3>
                <div className="downloadBox">
                    <a href="/Class_Registration.pdf" download><img className="download" src="/download.png"/></a>
                    <a href="/Class_Registration.docx" download><img className="download" src="/word_doc.ico"/></a>
                    <h3>Download Course<br/>Registration Form</h3>
                </div>
                <div className="downloadBox">
                <a href="/Tutor_Interest.pdf" download><img className="download" src="/download.png"/></a>
                    <a href="/Tutor_Interest.docx" download><img className="download" src="/word_doc.ico"/></a>
                    <h3>Download Tutor<br/>Availability Form</h3>
                </div>*/}

            </div>
            <div >
                <h2>Contact Information</h2>
                <div className="contactContainer2">
                    <div className="contactContainerLi">
                        <img alt="locationIcon" className="contactIcon" src="./location.png"></img>
                        <h3 className="downloadColor">San Diego, CA</h3>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="contactContainerLi">
                        <a href="tel:619-347-0250"><img alt="phoneIcon" className="contactIcon" src="./phone.png"></img></a>
                        <a href="tel:619-347-0250"><img alt="phoneIcon" className="phoneNum" src="./phonenum.png"></img></a>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="contactContainerLi">
                        <a href="mailto:jbernens.bus@gmail.com.?subject=Coming From Your Website" target="_blank" rel="noopener noreferrer"><img className="contactIcon" alt="emailIcon" src="./email.png"></img></a>
                        <a href="mailto:jbernens.bus@gmail.com.?subject=Coming From Your Website" target="_blank" rel="noopener noreferrer"><h3 className="downloadColor">jbernens.bus@gmail.com</h3></a>
                    </div>
                    <br></br>
                    <br></br> 
                </div>
            </div>
        </div>
    )
}
export default Contact;