import { useState } from "react";
import { Link } from 'react-router-dom';
//end of imports

function About(){
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

    return (
        <div>
          <header className="text-center my-3">
            <a href="https://www.kfupm.edu.sa/">
              <img
                src="https://specialneeds.kfupm.edu.sa/images/kfupm-logo-en.png"
                alt="KFUPM logo"
                className="img-fluid"
              />
            </a>
          </header>

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

          <main className="container text-center py-5">
            <h1>Welcome to my portfolio!</h1>
            <h2>I'm Oukba Bouketir, an aspiring frontend dev and game designer.</h2>
            <p>
              I'm honing my skills to create great frontend designs and amazing game
              experiences! Currently, I'm improving my React skills for frontend
              development and exploring Unreal Engine for game design and
              development. I am also pursuing a Computer Science degree at KFUPM.
            </p>
          </main>

          <footer className="text-center py-3">
            <p>
              Contact me at:{" "}
              <a href="mailto:elecwizer@gmail.com">elecwizer@gmail.com</a> or my
              phone number +966550060783
            </p>
          </footer>
        </div>
      );
    };

    export default About;
