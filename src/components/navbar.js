import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (

    <nav>
      <div className="text"> Francisca Moore</div>
      <div className="color"></div>
      <div className="color"></div>
      <ul>
        <li>
      
            <Link to="/AboutMe" className="nav-link">
              <i className="bi bi-file-earmark-person"></i>
            </Link>
     
        </li>
        <li>
             <Link to="/Projects" className="nav-link">
              <i className="bi bi-file-code"></i>
            </Link>
  
        </li>
        <li>

            <Link to="/Contact" className="nav-link">
              <i className="bi bi-envelope"></i>
            </Link>
     
        </li>
      </ul>

    </nav>
  )
};
export default Navbar;