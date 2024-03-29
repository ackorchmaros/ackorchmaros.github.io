import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <>
            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Publications</a></li>
                  <li><a className="smoothscroll" href="#talks">Conferences and Seminars</a></li>
                  <li><a className="smoothscroll" href="#resume">Work</a></li>
                  <li><a className="smoothscroll" href="#education">Education</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>
            </nav>
            <section id="about">

               <div className="row">
                  <div className="three columns">
                     <img className="profile-pic" src={profilepic} alt="Annachiara Korchmaros" />
                  </div>
                  <div className="nine columns main-col">
                     <h2>About Me</h2>

                     <p>{bio}</p>

                     <div className="row">
                        <div className="columns contact-details">
                           <h2>Contact Details</h2>
                           <p className="address">
                              <span>{name}</span><br />
                              <span>
                                 {/* {street}<br /> */}
                                 {city} {state}, {zip}
                              </span><br />
                              {/* <span>{phone}</span><br /> */}
                              <span>{email}</span>
                           </p>
                        </div>
                        <div className="columns download">
                           <p>
                              <a href={resumeDownload} className="button"><i className="fa fa-download" download></i>Download Resume</a>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

            </section>
         </>
      );
   }
}

export default About;
