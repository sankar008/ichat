import * as React from 'react'
import { Link } from "react-router-dom"

import '../assets/style/access.scss'
import * as loginImg from '../assets/img/ImgLib.js';

/* import { StyledEngineProvider } from '@mui/material/styles'; */
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TextField } from '@mui/material';
import OTPInput from "otp-input-react";
import * as appUtils from "../helper/validation";


const SignupParent = () => {
  const [isField, setisField] = React.useState(0);
  const [dateValue, setDateValue] = React.useState(null)
  const [email, setEmail] = React.useState('')
  const [OTP, setOTP] = React.useState("");


  const storeRegistrationData = (isField) =>{
    let stage = ++isField;
    setisField(stage);
  }


  const handalerChanges = (e) => {
    const { name, value } = e.target;
    if(name === 'emailId'){
      setEmail(value)
    }

  }

  


  return (
    <>
    <page-wrapper>
      <header className="headerDefault">
          <div className="container">
              <div className="row g-1">
                  <div className="col-md-1">
                      <Link className="d-block" to="/">
                        <img className="img-fluid" src={ loginImg.logoLight } alt="" />
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
                        <span className="d-block">You can <Link className='link-theme link-danger link-underline-opacity-0' to="/parent/login">Login here !</Link></span>
                        {
                          isField === 0?(
                            <>
                              <h4 className="display-6 my-5">Let’s start with your first name</h4>
                              <div className="form-floating my-5">
                                <input type="text" className="form-control" id="u-name" placeholder="Enter your First name"  onChange={handalerChanges}/>
                                <label htmlFor="u-name">First Name</label>
                              </div>
                            </>
                          ):``
                        }{
                          isField === 1?(
                          <>
                            <h4 className="display-6 my-5">Let’s start with your first name</h4>
                            <div className="form-floating my-5">
                              <input type="text" className="form-control" id="u-email" placeholder="Last name"  onChange={handalerChanges}/>
                              <label htmlFor="u-email">Last Name</label>
                            </div>
                          </>
                        ):``
                      }{
                            isField === 2?(
                            <>
                              <h4 className="display-6 my-5">What’s your email address?</h4>
                              <div className="form-floating my-5">
                                <input type="text" className="form-control" id="emailId" name="emailId" placeholder="Email Id"  onChange={handalerChanges}/>
                                <label htmlFor="u-email">Enter your email address</label>
                              </div>
                            </>
                          ):``
                        }{
                          isField === 3?(
                            <>
                              <h4 className="display-6 my-5">
                                Enter the OTP<br/>
                                <small className='fs-6'>A code has been sent to { email }</small> 
                              </h4>
                              <div className="form-floating my-5">
                              <OTPInput
                                  value={OTP}
                                  onChange={setOTP}
                                  autoFocus
                                  OTPLength={6}
                                  otpType="number"
                                  disabled={false}
                                />
                              </div>
                            </>
                          ):``
                        }{
                          isField === 4?(
                            <>
                              <h4 className="display-6 my-5">When’s your birthday?</h4>
                              {/* <div className="form-floating my-5">
                                <input type="text" className="form-control" id="u-birth-d" placeholder="Select your date of birth" />
                                <label htmlFor="u-birth-d">Select your date of birth</label>
                              </div> */}

                              <LocalizationProvider className="" dateAdapter={AdapterDayjs}>
                                <MobileDatePicker 
                                  className="form-control my-5"
                                  label="Select Date of Birth"
                                  views={['day', 'month', 'year']}
                                  format="d MMMM YYYY"
                                  placeholder="Select your date of birth"
                                  inputProps={{
                                    placeholder: "Placeholder"
                                  }}
                                  value={dateValue}
                                  onChange={(newValue) => setDateValue(newValue)}
                                  renderInput={(params) => <TextField {...params} placeholder='Select your date of birth' />}
                                />
                              </LocalizationProvider>
                            </>
                          ):``
                        }
                         
                        <button className="btn btn-theme btn-danger w-100" onClick={() => storeRegistrationData(isField)}>Continue</button>
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