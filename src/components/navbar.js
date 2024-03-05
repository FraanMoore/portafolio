import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (

    <nav>
      <div className="text"> Francisca Moore</div>
      <div className="color"></div>
      <div className="color"></div>

      <ul>
        <ul>
          <li><a href=""><i className="bi bi-file-earmark-person"></i></a></li>
          <li><a href=""><i className="bi bi-file-code"></i></a></li>
          <li><a href=""><i className="bi bi-envelope"></i></a></li>
        </ul>
      </ul>

      {/*
      <ul>
        <li>
      <p>
            <Link to="/AboutMe" className="nav-lin  k">
              <i className="bi bi-file-earmark-person"></i>
            </Link>
            </p>
        </li>
        <li>
        <p>
             <Link to="/Projects" className="nav-link">
              <i className="bi bi-file-code"></i>
            </Link>
            </p>
        </li>
        <li>
        <p>
            <Link to="/Contact" className="nav-link">
              <i className="bi bi-envelope"></i>
            </Link>
            </p>
        </li>
      </ul>
  */}

    </nav>
  )
};
export default Navbar;