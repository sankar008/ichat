import React from "react";
import { Link } from "react-router-dom";

import * as HomeIMG from "../assets/img/ImgLib";

const Home = () => {
  return (
    <>
    <wrapper>
      <header className="headerDefault">
          <div className="container">
              <div className="row g-1">
                  <div className="col-md-1">
                      <Link className="d-block" to="#">
                        <img className="img-fluid" src={ HomeIMG.logo } alt="" />
                      </Link>
                  </div>
                  <div className="col-md-10 border-bottom"></div>
                  <div className="col-md-1"></div>
              </div>
          </div>
      </header>
      <body-main class="bg-home">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-lg-7 mx-md-auto text-center">
                      <h1 className="banner-title display-4 fw-bold">The hottest social media app for children and adults!</h1>
                      <p className="cont text-muted">A lead paragrap lorem ipsum lorem ipsum</p>

                      <Link className="btn btn-theme btn-primary my-4" to="/login">Get started!</Link>
                      <Link className="link-primary link-theme link-underline-opacity-0 d-block">Watch video</Link>
                  </div>
              </div>
          </div>
      </body-main>
    </wrapper>
    </>
  );
};

export default Home;