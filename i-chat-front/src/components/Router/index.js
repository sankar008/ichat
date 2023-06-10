import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* import Footer from "../components/Footer";
import Header from "../components/Header"; */
import Home from "../Home";
import Aboutus from "../Aboutus";
import AccountType from "../AccountType";
import SignupParent from "../SignupParent";
import SignupChild from "../SignupChild";
import LoginChild from "../LoginChild"
import LoginParent from "../LoginParent";
import Page404 from "../Page404";

const BasicRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/account-type" element={<AccountType />} />
          <Route exact path="/signup-parent" element={<SignupParent />} />
          <Route exact path="/signup-child" element={<SignupChild />} />
          <Route exact path="/login-parent" element={<LoginParent />} />
          <Route exact path="/login-child" element={<LoginChild />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesS />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/how-it-work" element={<HowItWork/> } />
        <Route path="/benifits" element={<Benifits/> } />
        <Route path="/review" element={<Review/> } />
        <Route path="/faq" element={<Faq/> } />
      </Routes>
      <Footer /> */}
    </Router>
  );
};

export default BasicRoutes;