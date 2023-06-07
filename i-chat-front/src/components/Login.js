import React from 'react'
import { Link } from "react-router-dom"

import '../assets/style/access.scss'
import * as loginImg from '../assets/img/ImgLib.js';

const Login = () => {
    console.log(loginImg.google.default);

  return (
    <>
    <wrapper>
      <header className="headerDefault">
          <div className="container">
              <div className="row g-1">
                  <div className="col-md-1">
                      <Link className="d-block" to="/">
                        <img className="img-fluid" src={ loginImg.logo } alt="" />
                      </Link>
                  </div>
                  <div className="col-md-10 "></div>
                  <div className="col-md-1"></div>
              </div>
          </div>
      </header>
      <body-main>
       <div className="container-fluid">
            <div className="row h-100">
                <div className="col-12 col-lg-7 panLeft" style={{'--bg-url': 'url('+loginImg.loginBg+')'}}></div>
                <div className="col-12 col-lg-5 panRight">
                    <div className="panWrapper text-light form-theme">
                        <span className="display-6 h5 mb-4 d-block">Sign in</span>
                        <span className="d-block mb-2">Don’t have an account?</span>
                        <span className="d-block">You can <Link className='link-danger link-underline-opacity-0' to="/signup">Register here!</Link></span>

                        <div className="form-floating my-5">
                            <input type="email" className="form-control" id="u-email" placeholder="Enter your email address" />
                            <label htmlFor="u-email">Email</label>
                        </div>
                        <button className="btn btn-theme btn-danger w-100">Continue</button>


                        <div className="mt-5">
                            <p className="text-divider text-center">or continue with</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#"><img src={loginImg.facebook.default} alt="" /></a></li>
                                <li className="list-inline-item"><a href="#"><img src={loginImg.apple.default} alt="" /></a></li>
                                <li className="list-inline-item"><a href="#"><img src={loginImg.google.default} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       </div>
      </body-main>
    </wrapper>
    </>
  )
}

export default Login