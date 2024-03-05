import React from "react";
import { Link } from "react-router-dom";
import Avatar from '../assets/avatar.png';


const AboutMe = () => {
  return (

    <div id="aboutmeContainer">
      <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4" id="avatarImg">
      <img src={Avatar} className="img-fluid rounded-start"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>

    
  )
};
export default AboutMe;