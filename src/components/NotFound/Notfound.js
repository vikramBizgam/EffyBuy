import React from "react";
import { Link } from "react-router-dom";
import Img404 from '../../assets/images/media/404.svg'
import Img404q from '../../assets/images/media/404-q.svg'
import EffyBuyLogo from '../../assets/images/icon/effybuy_logo_with_name.png'
// import useDocumentTitle from "../components/useDocumentTitle";


const NotFound = () => {
//   useDocumentTitle("Not Found || React Personal Portfolio Template");
  return (
    <div className="main-page-wrapper">
      <div className="error-page d-lg-flex align-items-center">
        <div className="img-holder order-lg-last">
          <img
            src={Img404}
            alt="media"
            className="w-100 illustration"
          />
          <img
            src={Img404q}
            alt="media"
            className="shapes qus"
          />
        </div>
        <div className="text-wrapper order-lg-first">
          {/* <div className="logo">
            <Link to="/">
              <img src={EffyBuyLogo} alt="logo" />
            </Link>
          </div> */}
          <h1 className="font-slab">
            Sorry, <br />
            The Page Can’t <br />
            be Found.
          </h1>
          <p className="font-rubik">
          You didn't break the internet, but we can't find what you are looking for.
          </p>

          <Link
            to="/EffyBuy"
            className="back-home font-rubik d-flex align-items-center justify-content-center"
          >
            <span>Back to Home</span>
            {/* <img src="images/icon/53.svg" alt="icon" /> */}
          </Link>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* /.error-page */}
    </div>
  );
};

export default NotFound;
