import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
 /* const [screenSize, setScreenSize] = useState('');

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
  }, []); */

  return (
    <nav className="container"/*className={`navbar-${screenSize}`}*/>
      <div className="fullname">
        Francisca Moore
      </div>
      <div className="color"></div>
      <div className="color"></div>

      <ul>
        <li><p className="indice"> <Link to="/AboutMe" > <i className="bi bi-file-earmark-person"></i> </Link> </p> </li>
        <li><p className="indice"> <Link to="/" > <i className="bi bi-file-code"></i> </Link> </p> </li>
        <li><p className="indice"> <Link to="/" > <i className="bi bi-envelope"></i> </Link> </p> </li>
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