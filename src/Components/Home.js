import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import Typewriter from "typewriter-effect";
import { signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config";


const Home = (props) => {

  let navigate = useNavigate();

    // --------------LOG OUT FUNCTION--------------------
    const signUserOut = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        props.setAuthenticated(false);
        navigate("/Login");
        window.location.reload(false);
        localStorage.setItem("alertMsg","You have been successfully logged out!");
        props.setAlertMsg("Your Blog has been successfully deleted!");
        localStorage.setItem("alertColor","lightgreen");
        props.setAlertColor("lightgreen");
      });
    };
  return (
    <>
      <section className="landing-page">

        {/* --------------------LANDING PAGE------------------------- */}
        <div className="main">
          <div className="main-overlay"></div>
          <video src="./Video2.mp4" autoPlay muted loop />
          <div className="main-content d-flex justify-content-center">
            <div className="main-content-div">
              <Typewriter
                options={{
                  strings: [
                    "Explore, Engage, and Enlighten: Your Journey Starts Here!",
                    "Unleash Your Curiosity: Unveiling the World of Knowledge.",
                    "Unlocking the Power of Words: Your Gateway to Inspiration.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
          </div>
        </div>


        {/* ---------------------ABOOUT SECTION---------------------- */}
        <section
          className="d-flex align-items-center justify-content-evenly py-5 my-5 about"
          id="about"
        >
          <div className="about-div1 mx-5">
            <h2>About Us</h2>
            <h5>
              At <span className="text-success">CuriousPen</span>, we celebrate
              diversity and welcome a wide range of perspectives and topics.
              From personal anecdotes and creative fiction to thought-provoking
              essays and informative articles, our platform encourages the
              exploration of various themes and subjects.
            </h5>
            <h5>
              Join us on this exciting journey of self-expression and discovery.
              Whether you're here to share your passions, expand your
              readership, or simply find inspiration,{" "}
              <span className="text-success">CuriousPen </span>
              is here to help you embark on a fulfilling blogging experience.
            </h5>
          </div>
          <div className="about-div2 d-flex flex-column align-items-center justify-content-center border border-success p-4  border-start-0 border-end-0 rounded-5 shadow ">
            <img src="./Img4.svg" alt="..." className="landing-page-img4" />
            <h4 className="pt-3 text-center">"Fuel Your Imagination"</h4>
          </div>
        </section>


        {/* --------------------------CARD SECTION------------------------------- */}
        <section className="landing-page-2 d-flex align-items-center justify-content-evenly flex-wrap py-5">
          <div className="container">
            <div className="card">
              <div className="image">
                <img href="#" src="./Img1.svg" />
                <h3 className="text-center pt-2">...Discover...</h3>
              </div>

              <div className="content">
                <p>
                  Discover Your Inner Self: A Journey of Self-Exploration and
                  Personal Growth. Embark on a transformative journey to uncover
                  the depths of your being and unlock the potential within you
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="image">
                <img href="#" src="./Img2.svg" />
                <h3 className="text-center pt-2">...Connect...</h3>
              </div>
              <div className="content">
                <p>
                  Learn New Things: Expand Your Knowledge and Embrace Lifelong
                  Learning. Embark on a limitless journey of knowledge and
                  personal growth with
                  <span className="text-success"> CuriousPen</span>
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="image">
                <img href="#" src="./Img3.svg" />
                <h3 className="text-center pt-2">...Inspire...</h3>
              </div>
              <div className="content">
                <p>
                  Inspire People: Ignite Possibilities and Empower Positive
                  Change. Unleash your own potential, embrace new possibilities,
                  and become a catalyst for positive change.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* -------------------------------FOOTER SECTION-------------------------------------- */}
        <section className="">
          <section
            className="d-flex flex-column align-items-center py-5"
            id="FooterSection1"
          >
            <img src="./logo.png" alt="..." className="footer-logo py-4" />
            <h1 className="fw-bold footer-head">If Not Now, When?</h1>
            <h1 className="fw-bold footer-head">Ignite Your Creativity!</h1>

            <h4 id="footer-desc" className="text-center p-4">
              "Ready to be heard? Share your unique voice, captivating stories,
              and thought-provoking ideas. Start blogging today and let your
              words resonate with an engaged audience eager for inspiring
              content."
            </h4>
            <button className="footer-btn rounded-5">
              <Link className="footer-btn-link" to="/CreateBlog">Create Your Blog</Link>
            </button>
          </section>

          <section
            className="d-flex align-items-center justify-content-evenly pt-5 mt-5"
            id="main-footer"
          >
            <div>
              <h4 className="py-4 d-flex flex-column text-light">Blogs</h4>
              <h5>
                <Link to="/BlogHome">For Aspiring Readers</Link>
              </h5>
              <h5>
                <Link to="/BlogHome">For Creative Artists</Link>
              </h5>
              <h5>
                <Link to="/BlogHome">For Curious Minds</Link>
              </h5>
              <h5>
                <Link to="/BlogHome">For Students </Link>
              </h5>
            </div>
            <div>
              <h4 className="py-4 d-flex flex-column text-light">Company</h4>
              <h5>
                <a href="#about">About Us</a>
              </h5>
              <h5>
                <Link to="/BlogHome">Read Blogs</Link>
              </h5>
              <h5>
                <Link to="/CreateBlog">Create Blog</Link>
              </h5>
              <h5>
              {props.authenticated ? (
                  <Link onClick={signUserOut}>
                    Log Out
                  </Link>
                ) : (
                  <Link to="/Login">
                    Log In
                  </Link>
                )}
              </h5>
            </div>
            <div>
              <h4 className="py-4 d-flex flex-column text-light">Connect</h4>
              <h5>
                <a
                  href="https://www.facebook.com/AkshatSSomvanshi/"
                  target="_blank"
                >
                  <a
                    href="https://www.facebook.com/AkshatSSomvanshi/"
                    className="fa fa-facebook pe-2"
                    target="_blank"
                  ></a>
                  Facebook
                </a>
              </h5>
              <h5>
                <a
                  href="https://www.instagram.com/_._akshat_/?hl=en"
                  target="_blank"
                >
                  <a
                    href="https://www.instagram.com/_._akshat_/?hl=en"
                    className="fa fa-instagram pe-2"
                    target="_blank"
                  ></a>
                  Instagram
                </a>
              </h5>
              <h5>
                <a
                  href="https://www.linkedin.com/in/akshat-s-somvanshi-8651a2219/"
                  target="_blank"
                >
                  <a
                    href="https://www.linkedin.com/in/akshat-s-somvanshi-8651a2219/"
                    className="fa fa-linkedin pe-2"
                    target="_blank"
                  ></a>
                  LinkedIn
                </a>
              </h5>
              <h5>
                <a href="https://github.com/Akshat-Somvanshi18" target="_blank">
                  <a
                    href="https://github.com/Akshat-Somvanshi18"
                    className="fa fa-github pe-2"
                    target="_blank"
                  ></a>
                  GitHub
                </a>
              </h5>
            </div>
          </section>
          <h5 className="copyright pb-5">
            Made with Love, @Akshat S Somvanshi
          </h5>
        </section>
      </section>
    </>
  );
};

export default Home;

