import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (

    <nav>
      <div className="text"> Francisca Moore</div>
      <div className="color"></div>
      <div className="color"></div>
      <ul>
        <li><p> <Link to="/" > <i class="bi bi-file-earmark-person"></i> </Link> </p> </li>
        <li><p> <Link to="/" > <i class="bi bi-file-code"></i> </Link> </p> </li>
        <li><p> <Link to="/" > <i class="bi bi-envelope"></i> </Link> </p> </li>
      </ul>

    </nav>
  )
};
export default Navbar;