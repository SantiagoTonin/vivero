import React from "react";
import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Signup from "../../components/signup/Signup";

function Account() {
  return (
    <Fragment>
      <Header />
      <Signup />
      <Footer />
    </Fragment>
  );
}

export default Account;
