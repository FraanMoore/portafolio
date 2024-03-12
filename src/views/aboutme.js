import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from '../assets/avatar.png';

const AboutMe = () => {

  const [AboutMe, setAboutmeText] = useState("");

  const getAboutMeText = () => {
    fetch("http://localhost:3000/aboutme.txt")
        .then(res => res.text())
        .then(data => setAboutmeText(data))
        .catch(err => console.log(err))
  };

  useEffect(() => {
      getAboutMeText();
      console.log(AboutMe);

  }, [])
  return (
<div className="container">
<Link to={"/"} id="backButton" ><i className="bi bi-arrow-left"></i></Link>

      <div id="aboutmeContainer" className="card mb-3">
        <div className="row g-0" style={{justifyContent: "center", alignItems: "center"}}>
          <div id="avatarImg" className="col-md-4">
            <img  src={Avatar} className="img-fluid rounded-start" alt=""/>
          </div>
          <div id="textAboutme" className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Francisca Moore</h5>
              <p>Fullstack Developer y administradora turística y hotelera</p>
              <p>{AboutMe}</p>
            </div>
          </div>
        </div>
      </div>
    
      </div>

  )
};
export default AboutMe;