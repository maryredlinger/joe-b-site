import React from 'react';

class EmailForm extends React.Component{
    render(){
        return(
            <div>
                <form id="contact-form">
                    <div className="contactName">
                        <label className="contactTitle" htmlFor="name">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group contactName">
                        <label className="contactTitle" htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label className="contactTitle" htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default EmailForm;