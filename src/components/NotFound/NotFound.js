import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const NotFound = () => {
  return (
    <div>
      <Header></Header>
      <div className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md mt-20">
                <button className="btn btn-primary"><Link to='/'>Back To Home</Link></button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
