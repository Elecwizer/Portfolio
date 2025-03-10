import React, { useState } from 'react';
import bubbleBound from '../images/bubble.jpeg';
import timeSwitch from '../images/time.png';
import littleLemon from '../images/lemon.png';
import { Link } from 'react-router-dom';
//end of imports

function Projects() {
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
        <section className="projects">
          <div className="row">
            <article className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={bubbleBound} className="card-img-top" alt="Bubble Bound game" />
                <div className="card-body">
                  <h5 className="card-title">Bubble Bound Game</h5>
                  <p className="card-text">
                    In Bubble Bound, you play as a bubble that saves smaller bubbles while managing a moisture
                    meter. Watch out for dangers!
                  </p>
                  <a href="https://elecwizer.itch.io/bubble-bound" className="btn btn-primary">
                    Try it out
                  </a>
                </div>
              </div>
            </article>

            <article className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={timeSwitch} className="card-img-top" alt="Time Switch game" />
                <div className="card-body">
                  <h5 className="card-title">Time Switch Game</h5>
                  <p className="card-text">
                    Play as a soldier switching between past and future selves, gaining unique weapons while
                    fighting adaptive monsters.
                  </p>
                  <a href="https://ipingus.itch.io/time-switch" className="btn btn-primary">
                    Try it out
                  </a>
                </div>
              </div>
            </article>

            <article className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={littleLemon} className="card-img-top" alt="Little Lemon project" />
                <div className="card-body">
                  <h5 className="card-title">Little Lemon Website</h5>
                  <p className="card-text">
                    A front-end React project for an imaginary restaurant, showcasing modern web design and
                    interactivity.
                  </p>
                  <a
                    href="https://little-lemon-capstone-elecwizer-elecwizers-projects.vercel.app/"
                    className="btn btn-primary"
                  >
                    Try it out
                  </a>
                </div>
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

export default Projects;
