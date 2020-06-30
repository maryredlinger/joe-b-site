import React from 'react';
import EmailForm from './EmailForm.js'

const Contact = () => {
    return(
        <div className="HomeDisplay">
            <div className="contactContainer">
                <h3>Contact Me</h3>
                <EmailForm/>
            </div>
            <div>
                <h1>contact info</h1>
            </div>
        </div>
    )
}
export default Contact;