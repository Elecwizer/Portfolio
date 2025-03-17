
//end of imports

function HomePage(){
    return (
        <>
          <main className="container text-center my-5">
            <h1 className="fw-bold">Hi, I'm Oukba Bouketir</h1>
            <h2 className="text-muted">
              I'm currently a student at KFUPM studying Computer Science
            </h2>
            <h2 className="text-muted">
              This is my personal portfolio website. Feel free to browse through it!
            </h2>
            <h3 className="mt-3">Aspiring Game and Frontend Developer</h3>

            <div className="mt-5" id="form">
              <form action="index.html/submit" method="POST" className="border p-4 rounded">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name here"
                    maxLength="30"
                    minLength="3"
                    required
                  />
                  <div className="invalid-feedback">Please enter your name</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email here"
                    required
                  />
                  <div className="invalid-feedback">Please enter your email</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="phoneNum" className="form-label fw-bold">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phoneNum"
                    className="form-control"
                    placeholder="Enter your phone number here"
                    required
                  />
                  <div className="invalid-feedback">Please enter your phone number</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="suggestions" className="form-label fw-bold">
                    Any comments or recommendations?
                  </label>
                  <input
                    type="text"
                    id="suggestions"
                    className="form-control"
                    placeholder="Enter your recommendation here"
                    maxLength="150"
                    spellCheck="true"
                    required
                  />
                  <div className="invalid-feedback">Please enter a suggestion</div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">What is your occupation?</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="occupation"
                      id="std"
                      value="Student"
                      className="form-check-input"
                    />
                    <label htmlFor="std" className="form-check-label">
                      Student
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="occupation"
                      id="inst"
                      value="University instructor"
                      className="form-check-input"
                    />
                    <label htmlFor="inst" className="form-check-label">
                      University Instructor
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="occupation"
                      id="emp"
                      value="Employer"
                      className="form-check-input"
                    />
                    <label htmlFor="emp" className="form-check-label">
                      Employer
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="occupation"
                      id="oth"
                      value="Others"
                      className="form-check-input"
                    />
                    <label htmlFor="oth" className="form-check-label">
                      Others
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">
                    What should my next project be about?
                  </label>
                  <select name="projects" className="form-select">
                    <option value="ui-ux">UI/UX</option>
                    <option value="frontend">Frontend</option>
                    <option value="gamedes">Game Design</option>
                    <option value="gamedev">Game Development</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">
                    How do you wish this form reaches me?
                  </label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      name="contact"
                      id="phn"
                      value="phone"
                      className="form-check-input"
                    />
                    <label htmlFor="phn" className="form-check-label">
                      Phone
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      name="contact"
                      id="eml"
                      value="email"
                      className="form-check-input"
                    />
                    <label htmlFor="eml" className="form-check-label">
                      Email
                    </label>
                  </div>
                </div>

                <button id="submitButton" type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </main>
        </>
      );
    };

    export default HomePage;
