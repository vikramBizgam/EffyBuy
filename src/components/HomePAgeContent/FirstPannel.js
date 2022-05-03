import React from "react";
import FormDemo from "../Forms/TryForFreeForm";
// import BrandFour from "../brand/BrandFour";
// import first_pannel_image from '../../assets/images/FirstPannel.png'
// import LazyLoad from 'react-lazyload';



const FirstPannel = (props) => {
  return (
    <div className="main-page-wrapper font-gordita">
    <div className="hero-banner-seven lg-container">
      <div className="container" style={{"overflow":"hidden"}}>
        <div className="illustration-container">
          {/* <LazyLoad offset={100} once> */}
          <img src={props.firstimg} alt="ils" />
            {/* <img src="https://bizgameffybuy.s3.us-east-2.amazonaws.com/FirstPannel.png" alt="First_panel"/> */}
          {/* </LazyLoad> */}
        </div>
        {/* End .illustration-container */}

        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">
              {/* <span>One step solution</span> for all your E-procurement needs. */}
              <span>Automate </span> RFQ and Negotiation
            </h1>
            <p className="hero-sub-heading">
                {/* Why don't you focus on development,
                Let us do the Negotiation for all your purchases with guaranteed savings. */}
                Save 8-10% More In Each Purchase.
            </p>
            <FormDemo />
            {/* <p className="term-text">
              For teams & individuals — web, mobile, Mac, Windows
            </p> */}
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      {/* <div className="partner-slider-two mt-130 md-mt-80">
        <div className="container">
          <p className="text-center">
            Over <span>32K+</span> software businesses growing with Deski.
          </p>
          <div className="partnerSliderTwo">
            <BrandFour />
          </div>
        </div>
      </div> */}
      {/* End .partner-slider-two */}

      {/* /.partner-slider-two  */}
    </div>
    </div>
  );
};

export default FirstPannel;
