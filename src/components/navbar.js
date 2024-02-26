import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Navbar = () => {
 {/* const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setScreenSize('large');
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
        setScreenSize('medium');
      } else {
        setScreenSize('small');
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); */}

  return (
    <nav /*className={`navbar-${screenSize}`}*/>
      <div className="fullname">
        Francisca Moore
      </div>
      <div className="color"></div>
      <div className="color"></div>
      <ul>
        <li><p> <Link to="/AboutMe" > <i class="bi bi-file-earmark-person"></i> </Link> </p> </li>
        <li><p> <Link to="/" > <i class="bi bi-file-code"></i> </Link> </p> </li>
        <li><p> <Link to="/" > <i class="bi bi-envelope"></i> </Link> </p> </li>
      </ul>

    </nav>
  )
};

export default Navbar;