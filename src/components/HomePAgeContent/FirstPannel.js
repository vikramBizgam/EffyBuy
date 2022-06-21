import React from "react";
import FormDemo from "../Forms/TryForFreeForm";
import DocumentMeta from 'react-document-meta';
// import * as LottiePlayer from "@lottiefiles/lottie-player";
            

const FirstPannel = (props) => {
  const meta = {
    title: 'RFP Management Software - Procurement Sourcing Software',
    description: "Effybuy Instantly Automate all your Purchases using RFQ and the Reverse Auction Process. Avoid Manual Errors and Save Money for your Business. Request a Demo Now.",
    meta: {
      charset: 'utf-8',
      // name: {
      //   keywords: 'react,meta,document,html,tags'
      // }
    }
  };
  return (
    <DocumentMeta {...meta}>
    <div className="main-page-wrapper font-gordita">
    <div className="hero-banner-seven lg-container">
      <div className="container" style={{"overflow":"hidden"}}>
        <div className="illustration-container">
          <img src={props.firstimg} alt="First Panel" />
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">
              <span>Automate </span> RFQ and Negotiation
            </h1>
            <p className="hero-sub-heading">
                Save 8-10% More In Each Purchase.
            </p>
            <FormDemo />
          </div>
        </div>
      </div>

    </div>
    </div>
    </DocumentMeta>
  );
};

export default FirstPannel;
