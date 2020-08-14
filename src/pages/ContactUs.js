import React, { Component } from 'react';

//import './ContactUs.css';

class ContactUs extends Component {
  _isMounted = false;

  constructor(){
      super()
          this.state = {
              kurt_test: [],
               //We start with an empty array, so the component can finish rendering
          }
    this.getTests() // Call our fetch method when the component loads for the first time
  }
  
  componentWillMount(){
    this.getTests();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://localhost:3000/kurt_tests";
    var request = new Request(proxyurl + url);


    fetch(request, {mode: 'cors'}) //Fetch returns a promise
    .then((response)=>{
      if(this._isMounted) {

        this.setState({kurt_test: response}) //Finally, we can assign the cats to state, and they will render.
      }

    }) 
  }

  getTests = ()=>{
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://localhost:3000/kurt_tests"
    var request = new Request(proxyurl + url);
    fetch(request, {mode: 'cors'}) //Fetch returns a promise
    .then((response)=>{
      if(response.status === 200){ //Make sure we get a successfull response back
        return(response.json()) //We need to convert the response to json.  This also returns a promise
      }
    })
    .then((response)=>{
      this.setState({kurt_test: response}) //Finally, we can assign the cats to state, and they will render.
    }) 
    console.log(this.state.kurt_test, "here")
  }


  render(){
    return(
        <div>
          <h1>hello world</h1>
          {this.state.kurt_test.map((col1, col2) =>{
            return (
              <div>
                <span>{col1}</span>
                <span>{col2}</span>
              </div>
            )
          })}
        </div>
    )
  };
  
}

export default ContactUs;