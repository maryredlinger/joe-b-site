import React from "react";
import emailjs from "emailjs-com";

const Email = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_kIkHTHGd",
        e.target,
        "user_5dEJ8CuBwqyySPlR7N5dW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return <div>
                  <form className="my-form" onSubmit={sendEmail}>
                <div className="container">
                    <h1>Get in touch!</h1>
                    <ul>
                    <li>
                        <div className="grid grid-2">
                        <input type="text" placeholder="Name" name="user_name" required/>  
                        <input type="text" placeholder="Email" name="user_email" required/>
                        </div>
                    </li>
                    <li>
                        <textarea name="message" placeholder="Message"></textarea>
                    </li>   
                    <li>
                        <div className="grid grid-3">
                        <div className="required-msg">REQUIRED FIELDS</div>
                        <button className="btn-grid" type="submit" >
                            <span className="back">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt=""></img>
                            </span>
                            <span className="front" type="submit" value="Send">SUBMIT</span>
                        </button>
                        <button className="btn-grid" type="reset" >
                            <span className="back">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt=""></img>
                            </span>
                            <span className="front">RESET</span>
                        </button> 
                        </div>
                    </li>    
                    </ul>
                </div>
                </form>

  </div>;
};

export default Email;
