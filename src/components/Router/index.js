import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* import Footer from "../components/Footer";
import Header from "../components/Header"; */
import Home from "../Home";
import Aboutus from "../Aboutus";
import AccountType from "../AccountType";
import SignupParent from "../parents/SignupParent";
import SignupChild from "../kids/SignupChild";
import LoginChild from "../kids/LoginChild"
import LoginParent from "../parents/LoginParent";
import Profile from "../Profile";
import Page404 from "../Page404";

const BasicRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/account-type" element={<AccountType />} />
          <Route exact path="/parent/signup" element={<SignupParent />} />
          <Route exact path="/child/signup" element={<SignupChild />} />
          <Route exact path="/parent/login" element={<LoginParent />} />
          <Route exact path="/child/login" element={<LoginChild />} />
          <Route exact path="/profile" element={<Profile />} />
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