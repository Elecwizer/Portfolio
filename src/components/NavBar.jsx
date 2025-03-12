import { useState } from "react";
import { Link } from 'react-router-dom';
//end of imports

function NavBar(){
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const html = document.documentElement;
        if(darkMode){
            html.removeAttribute("data-bs-theme");
        }else{
            html.setAttribute("data-bs-theme", "dark");
        }
        setDarkMode(!darkMode);
    };

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container" id="navbar">
              <Link className="navbar-brand" to="/">
                Portfolio
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/academics">
                      Academics
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
                <button
                  id="modeToggle"
                  className={`btn ms-2 ${
                    darkMode ? "btn-outline-light" : "btn-outline-dark"
                  }`}
                  onClick={toggleDarkMode}
                >
                  Toggle Theme
                </button>
              </div>
            </div>
        </nav>
        </>
    );
};

export default NavBar;