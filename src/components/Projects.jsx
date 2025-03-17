import bubbleBound from '../images/bubble.jpeg';
import timeSwitch from '../images/time.png';
import littleLemon from '../images/lemon.png';
//end of imports

function Projects() {
  return (
    <>
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
                    href="https://little-lemon-capstone-elecwizer-elecwizers-projects.vercel.app/?_vercel_share=d2NAKWz3YMn6LOa8gTfYGy1olvJEdDaY"
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
    </>
  );
}

export default Projects;
