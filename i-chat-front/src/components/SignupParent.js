import React, { useState } from 'react'
import { Link } from "react-router-dom"

import '../assets/style/access.scss'
import * as loginImg from '../assets/img/ImgLib.js';

const SignupParent = () => {
  const [isField, setisField] = useState(1);
console.log('hello')

  return (
    <>
    <page-wrapper>
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
                <div className="col-12 col-lg-7 panLeft" style={{'--bg-url': 'url('+loginImg.signBg+')'}}></div>
                <div className="col-12 col-lg-5 panRight">
                    <div className="panWrapper text-light form-theme">
                        <span className="display-6 h5 mb-4 d-block">Sign in</span>
                        <span className="d-block mb-2">If you already have an account register</span>
                        <span className="d-block">You can <Link className='link-theme link-danger link-underline-opacity-0' to="/login-parent">Login here !</Link></span>

                        <h4 className="display-6 my-5">Let’s start with your first name</h4>
                        {isField === 0 (
                          <>
                            <div className="form-floating my-5">
                                <input type="text" className="form-control" id="u-name" placeholder="Enter your First name" />
                                <label htmlFor="u-name">Firstname</label>
                            </div>
                          </>
                        )}
                        <button className="btn btn-theme btn-danger w-100">Continue</button>


                    </div>
                </div>
            </div>
       </div>
      </body-main>
    </page-wrapper>
    </>
  )
}

export default SignupParent