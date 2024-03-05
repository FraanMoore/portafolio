import React from "react";
import { Link } from "react-router-dom";
import Avatar from '../assets/avatar.png';


const AboutMe = () => {
  return (
<div>
<button type="button" class="btn"><Link to={"/"} id="backButton" ><i className="bi bi-arrow-left"></i></Link></button>

      <div id="aboutmeContainer" className="card mb-3">
        <div className="row g-0" style={{justifyContent: "center"}}>
          <div id="avatarImg" className="col-md-4">
            <img  src={Avatar} className="img-fluid rounded-start" />
          </div>
          <div id="textAboutme" className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Francisca Moore</h5>
              <p>Fullstack Developer y administradora turística y hotelera</p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    
      </div>

  )
};
export default AboutMe;