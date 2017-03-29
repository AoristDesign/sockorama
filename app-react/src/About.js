import React, { Component } from 'react';
import Nav from './Nav'

class About extends Component {
  render() {
    return ( <div>
                <div className="row">
            <div className="col-sm-8 col-sm-offset-2 text-center">
                <h3 className="text-center">About Us</h3>
                <hr/>
                <p className="about-text">We are a tiny sock company in the middle of nowehere trying to tell socks. Buy our socks!</p>
                <p className="about-text">Here at Sockorama, we believe in quality in our product as well as our ethics. That's why all of our socks are American made user fair labor practices and paying living wages to all of our workers. </p>
                <hr/>
            </div>
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <h4 className="text-center">Want to get in touch? We'd love to hear from you!</h4>
                    <form>
                        <div className="form-group">
                            <label className="hidden" for="name">Name</label>
                            <input type="name" className="form-control" id="name" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label className="hidden" for="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <label className="hidden" for="message">Message</label>
                            <textarea className="form-control" rows="3" placeholder="Your message here..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-default btn-block">Submit</button>
                    </form>
                    <br/><br/>
                </div>
            </div>
        </div>
    </div>
     
    );
  }
}

export default About;
