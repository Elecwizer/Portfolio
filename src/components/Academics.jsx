import React, { useState } from 'react';
import advancedReact from '../images/advancedReact.png';
import uiux from '../images/UIUX.png';
import versionControl from '../images/versionControl.png';
import { Link } from 'react-router-dom';
//end of imports

function Academics() {
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
    <>
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

      <main className="container my-5">
        <section className="row g-4">
          <div className="col-md-4">
            <article className="card h-100">
              <img
                src={advancedReact}
                className="card-img-top"
                alt="Advanced React certificate from Meta"
              />
              <div className="card-body">
                <h2 className="card-title">Advanced React Course</h2>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className="card h-100">
              <img src={uiux} className="card-img-top" alt="UI/UX certificate from Meta" />
              <div className="card-body">
                <h2 className="card-title">UI/UX Course</h2>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className="card h-100">
              <img
                src={versionControl}
                className="card-img-top"
                alt="Version Control certificate from Meta"
              />
              <div className="card-body">
                <h2 className="card-title">Version Control Course</h2>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="text-center py-4">
        <p>
          Contact me at: <a href="mailto:elecwizer@gmail.com">elecwizer@gmail.com</a> | Phone: +966550060783
        </p>
      </footer>
    </>
  );
}

export default Academics;
