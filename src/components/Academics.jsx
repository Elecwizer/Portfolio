import advancedReact from '../images/advancedReact.png';
import uiux from '../images/UIUX.png';
import versionControl from '../images/versionControl.png';
//end of imports

function Academics() {
  return (
    <>
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
    </>
  );
}

export default Academics;
