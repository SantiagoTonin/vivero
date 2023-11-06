import React from "react";
import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Login from "../../components/login/Login";

function Account() {
  return (
    <Fragment>
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default Account;
